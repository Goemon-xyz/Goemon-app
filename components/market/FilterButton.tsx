import React, { FC } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useTheme } from '@react-navigation/native'
import { CustomTheme } from '@/constants/Colors'
import { styles } from '@/components/market/styles'

interface FilterButtonProps {
  label: string
  icon?: string
  isActive?: boolean
  onPress: () => void
}

const FilterButton: FC<FilterButtonProps> = ({ label, icon, isActive = false, onPress }) => {
  const { colors } = useTheme() as CustomTheme

  return (
    <TouchableOpacity
      style={[styles.filterButton, isActive && styles.activeFilterButton]}
      onPress={onPress}
    >
      <Text
        style={[styles.filterButtonText, { color: isActive ? colors.background : colors.primary }]}
      >
        {label}
      </Text>
      {icon && (
        <Ionicons name={icon} size={16} color={isActive ? colors.background : colors.primary} />
      )}
    </TouchableOpacity>
  )
}

export default FilterButton
