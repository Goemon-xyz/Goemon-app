import React, { forwardRef, useMemo } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

export type Ref = BottomSheetModal

const CustomBottomSheetModal = forwardRef<Ref>((props, ref) => {
  const snapPoints = useMemo(() => ['25%', '50%', '75%', '100%'], [])

  return (
    <BottomSheetModal
      ref={ref}
      index={0}
      snapPoints={snapPoints}
      backgroundComponent={({ style }) => (
        <View style={[style, styles.container]}>
          <Text>Background Component</Text>
        </View>
      )}
    >
      <View style={styles.contentContainer}>
        <Text>Content Component</Text>
      </View>
    </BottomSheetModal>
  )
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default CustomBottomSheetModal
