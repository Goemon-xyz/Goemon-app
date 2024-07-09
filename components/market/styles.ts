import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 60,
  },
  searchInput: {
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
  },
  tabText: {
    fontWeight: 'bold',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  filterButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(33, 150, 243, 0.5)',
  },
  activeFilterButton: {
    backgroundColor: '#2196F3',
  },
  filterButtonText: {
    marginRight: 4,
  },
  depositContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 16,
  },
  depositText: {
    marginRight: 8,
  },
  depositButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.1)',
    marginHorizontal: 4,
  },
  depositIcon: {
    width: 20,
    height: 20,
    marginRight: 4,
  },
  depositButtonText: {
    fontWeight: 'bold',
  },
})

export const listItemStyles = StyleSheet.create({
    listItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 16,
      },
      coinIcon: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 12,
      },
      coinInfo: {
        flex: 1,
      },
      coinName: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      coinSymbol: {
        fontSize: 14,
      },
      priceInfo: {
        alignItems: 'flex-end',
      },
      coinPrice: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      coinChange: {
        fontSize: 14,
      },
      leverageInfo: {
        alignItems: 'center',
      },
      leverage: {
        fontWeight: 'bold',
        fontSize: 16,
      },
      typeContainer: {
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        borderRadius: 4,
        paddingHorizontal: 6,
        paddingVertical: 2,
      },
      type: {
        fontSize: 12,
      },
      volumeInfo: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      volume: {
        marginLeft: 4,
        fontWeight: 'bold',
      },
})
