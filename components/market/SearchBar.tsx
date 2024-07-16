import React, { FC } from 'react'
import { View, TextInput, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native'
import { useTheme } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'
import { CustomTheme } from '@/constants/Colors'

interface SearchBarProps {
  searchQuery: string
  setSearchQuery: (query: string) => void
}

const SearchBar: FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  const { colors } = useTheme() as CustomTheme

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={[styles.searchContainer, { backgroundColor: colors.card }]}>
        <Ionicons
          name="search"
          size={24}
          color="rgba(136, 136, 145, 1)"
          style={styles.searchIcon}
        />
        <TextInput
          style={[styles.searchInput, { color: 'rgba(33, 33, 36, 1)' }]}
          // placeholder="Search..."
          // placeholderTextColor="rgba(136, 136, 145, 1)"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
  },
})

export default SearchBar
