import React, { FC } from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'
import UpDownPairButton from '@/components/market/Button-pair/index'
import DownArrowSVg from '@/assets/icons/market/Filter-Button/down-arrow'

interface FilterButtonProps {
  label: string
  icon?: string
  isActive?: boolean
  onPress: () => void
}

const FilterButton: FC<FilterButtonProps> = ({ label, icon, isActive = false, onPress }) => {
  const { colors } = useTheme() as CustomTheme

  if (label === 'UpDown') {
    return <UpDownPairButton />
  }

  return (
    <TouchableOpacity
      style={[styles.filterButton, isActive && styles.activeFilterButton]}
      onPress={onPress}
    >
      <Text
        style={[styles.filterButtonText, { color: isActive ? 'white' : 'rgba(136, 136, 145, 1)' }]}
      >
        {label}
      </Text>
      {icon && <DownArrowSVg fill={isActive ? 'white' : 'rgba(136, 136, 145, 1)'} />}
    </TouchableOpacity>
  )
}

export default FilterButton

const styles = StyleSheet.create({
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(45, 168, 206, 1)',
  },
  activeFilterButton: {
    backgroundColor: '#2196F3',
  },
  filterButtonText: {
    marginRight: 4,
  },
})
