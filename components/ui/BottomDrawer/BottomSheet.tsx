import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useImperativeHandle } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { FaTimes } from 'react-icons/fa'
import CrossSVG from '@/assets/icons/trade/trade-seeting-drawer/svg/crossSVG'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50

type BottomSheetProps = {
  heading?: string
  isDark?: boolean
  children?: React.ReactNode
}

export type BottomSheetRefProps = {
  scrollTo: (destination: number) => void
  isActive: () => boolean
}

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
  ({ heading, isDark, children }, ref) => {
    const translateY = useSharedValue(0)
    const active = useSharedValue(false)

    const scrollTo = useCallback((destination: number) => {
      'worklet'
      active.value = destination !== 0
      translateY.value = withSpring(destination, { damping: 50 })
    }, [])

    const isActive = useCallback(() => {
      return active.value
    }, [])

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive])

    const context = useSharedValue({ y: 0 })
    const gesture = Gesture.Pan()
      .onStart(() => {
        context.value = { y: translateY.value }
      })
      .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y
        translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y)
      })
      .onEnd(() => {
        if (translateY.value > -SCREEN_HEIGHT / 3) {
          scrollTo(0)
        } else if (translateY.value < -SCREEN_HEIGHT / 2.8) {
          scrollTo(MAX_TRANSLATE_Y)
        }
      })

    const rBottomSheetStyle = useAnimatedStyle(() => {
      return {
        transform: [{ translateY: translateY.value }],
      }
    })

    const containerStyle = [
      styles.bottomSheetContainer,
      { backgroundColor: isDark ? 'black' : 'white' }, // Adjust background color based on theme
    ]

    const textStyle = {
      color: isDark ? 'white' : 'black', // Adjust text color based on theme
    }

    return (
      <GestureDetector gesture={gesture}>
        <Animated.View style={[containerStyle, rBottomSheetStyle]}>
          <View style={styles.line} />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}
          >
            <Text style={[textStyle, { flex: 1, fontSize: 20, marginLeft: 16 }]}>{heading}</Text>
            <TouchableOpacity style={{ marginRight: 16 }} onPress={() => scrollTo(0)}>
              <CrossSVG isDark={isDark} />
            </TouchableOpacity>
          </View>
          <View style={styles.lowerLine} />
          {children}
        </Animated.View>
      </GestureDetector>
    )
  }
)

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 25,
    shadowColor: 'white',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  line: {
    width: 75,
    height: 4,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
    borderRadius: 2,
  },
  lowerLine: {
    width: '100%',
    height: 2,
    backgroundColor: 'grey',
    alignSelf: 'center',
    marginVertical: 15,
  },
})

export default BottomSheet
