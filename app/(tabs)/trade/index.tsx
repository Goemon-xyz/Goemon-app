import React, { useRef } from 'react'
import { View, Button } from 'react-native'
import CustomBottomSheetModal from '@/components/ui/BottomDrawer/CustomBottomSheetModal'
import { BottomSheetModal } from '@gorhom/bottom-sheet'

function Trade() {
  const bottomSheetRef = useRef<BottomSheetModal>(null)

  const handlePresentModalPress = () => bottomSheetRef.current?.present()

  return (
    <View style={{ flex: 1 }}>
      <CustomBottomSheetModal ref={bottomSheetRef} />
      <Button title="Present Modal" onPress={handlePresentModalPress} />
    </View>
  )
}

export default Trade
