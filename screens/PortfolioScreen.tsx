import { FC, useState, useEffect, useCallback } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  RefreshControl,
  SafeAreaView,
  Dimensions,
} from 'react-native'
import Svg, {
  Path,
  Line,
  Text as SvgText,
  Defs,
  LinearGradient,
  Stop,
  Rect,
} from 'react-native-svg'
import { FontAwesome5 } from '@expo/vector-icons'
import { FlashList } from '@shopify/flash-list'

import TabBar from '@/components/TabBar'
import BitcoinSVG from '@/assets/coins/svg/bitcoinSVG'
import DogecoinSVG from '@/assets/coins/svg/dogecoinSVG'
import EthcoinSVG from '@/assets/coins/svg/ethcoinSVG'
import { PORTFOLIO_TAB_ITEMS } from '@/constants'
import LoggedInHeader from '@/components/LoggedInHeader'

interface Position {
  symbol: string
  size: number
  pnl: number
  date: string
  type: 'long' | 'short' | '0-Loss'
}

interface ChartData {
  value: number
  date: string
}

const { width: SCREEN_WIDTH } = Dimensions.get('window')
const CHART_HEIGHT = 200
const CHART_WIDTH = SCREEN_WIDTH - 32 // Assuming 16px padding on each side
const Y_AXIS_WIDTH = 50

const Portfolio: FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Summary')
  const [walletBalance, setWalletBalance] = useState<number>(162134.21)
  const [chartData, setChartData] = useState<ChartData[]>([
    { value: 1000, date: 'Mar2' },
    { value: 3000, date: 'Mar12' },
    { value: 6000, date: 'Mar22' },
    { value: 10000, date: 'Apr2' },
  ])
  const [timeFrame, setTimeFrame] = useState<string>('30D')
  const [realizedPNL, setRealizedPNL] = useState<number>(3000.0)
  const [unrealizedPNL, setUnrealizedPNL] = useState<number>(4502.21)
  const [marginUsage, setMarginUsage] = useState<number>(10.21)
  const [positions, setPositions] = useState<Position[]>([
    { symbol: 'ETH', size: 10.0, pnl: 520, date: '29Dec23-1900-C', type: 'long' },
    { symbol: 'BTC', size: 10.0, pnl: -1020, date: '29Feb23-2200-C', type: 'short' },
    { symbol: 'DOGE', size: 2500000, pnl: 2020, date: '26Apr24-0.22-C', type: '0-Loss' },
  ])
  const [refreshing, setRefreshing] = useState(false)

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    fetchPortfolioData().then(() => setRefreshing(false))
  }, [])

  useEffect(() => {
    fetchPortfolioData()
  }, [])

  const fetchPortfolioData = async () => {
    // Simulating API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    // In a real scenario, you would fetch data from your API here
    // and update the state with the fetched data
  }

  const renderPositionItem = ({ item }: { item: Position }) => (
    <TouchableOpacity style={styles.positionItem}>
      <View style={styles.positionLeft}>
        <View style={styles.symbolContainer}>
          {item.symbol === 'BTC' && <BitcoinSVG width={24} height={24} />}
          {item.symbol === 'ETH' && <EthcoinSVG width={24} height={24} />}
          {item.symbol === 'DOGE' && <DogecoinSVG width={24} height={24} />}
          <Text style={styles.positionSymbol}>{item.symbol}</Text>
        </View>
        <Text style={styles.positionDate}>{item.date}</Text>
      </View>
      <View style={styles.positionRight}>
        <Text style={styles.positionSize}>SIZE {item.size.toFixed(2)}</Text>
        <Text style={[styles.positionPNL, { color: item.pnl >= 0 ? '#00C087' : '#FF5660' }]}>
          {item.pnl > 0 ? '+' : ''}
          {item.pnl}$
        </Text>
      </View>
    </TouchableOpacity>
  )

  const renderChart = () => {
    const maxValue = Math.max(...chartData.map((d) => d.value))
    const minValue = Math.min(...chartData.map((d) => d.value))
    const yRange = maxValue - minValue

    const getY = (value: number) => {
      return CHART_HEIGHT - ((value - minValue) / yRange) * CHART_HEIGHT
    }

    const points = chartData
      .map((d, i) => {
        const x = (i / (chartData.length - 1)) * CHART_WIDTH
        const y = getY(d.value)
        return `${x},${y}`
      })
      .join(' ')

    const yAxisLabels = [0, 3000, 6000, 10000]

    return (
      <Svg height={CHART_HEIGHT} width={CHART_WIDTH}>
        <Defs>
          <LinearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
            <Stop offset="0" stopColor="#00C087" stopOpacity="0.4" />
            <Stop offset="1" stopColor="#00C087" stopOpacity="0" />
          </LinearGradient>
        </Defs>

        {/* Background grid */}
        {yAxisLabels.map((label, index) => (
          <Line
            key={index}
            x1="0"
            y1={getY(label)}
            x2={CHART_WIDTH}
            y2={getY(label)}
            stroke="#3B3B3B"
            strokeWidth="1"
          />
        ))}

        {/* Y-axis labels */}
        {yAxisLabels.map((label, index) => (
          <SvgText
            key={index}
            x="0"
            y={getY(label)}
            fill="#888888"
            fontSize="10"
            textAnchor="start"
          >
            {label}
          </SvgText>
        ))}

        {/* X-axis labels */}
        {chartData.map((d, index) => (
          <SvgText
            key={index}
            x={(index / (chartData.length - 1)) * CHART_WIDTH}
            y={CHART_HEIGHT}
            fill="#888888"
            fontSize="10"
            textAnchor="middle"
          >
            {d.date}
          </SvgText>
        ))}

        {/* Chart area */}
        <Path
          d={`M0,${CHART_HEIGHT} L${points} L${CHART_WIDTH},${CHART_HEIGHT} Z`}
          fill="url(#gradient)"
        />

        {/* Chart line */}
        <Path
          d={`M0,${getY(chartData[0].value)} L${points}`}
          fill="none"
          stroke="#00C087"
          strokeWidth="2"
        />
      </Svg>
    )
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <LoggedInHeader />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        <TabBar
          items={Object.values(PORTFOLIO_TAB_ITEMS)}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
        <View style={styles.header}>
          <Text style={styles.walletLabel}>Wallet Balance</Text>
          <Text style={styles.walletBalance}>${walletBalance.toFixed(2)}</Text>
        </View>

        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="download" size={20} color="white" />
            <Text style={styles.actionText}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="upload" size={20} color="white" />
            <Text style={styles.actionText}>Withdraw</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <FontAwesome5 name="unlock" size={20} color="white" />
            <Text style={styles.actionText}>Unlock</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.chartContainer}>
          <TabBar
            items={['7D', '30D', '90D', 'Custom']}
            activeTab={timeFrame}
            setActiveTab={setTimeFrame}
          />
          {renderChart()}
        </View>

        <View style={styles.statsContainer}>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Realized PNL</Text>
            <Text style={[styles.statValue, { color: '#00C087' }]}>+${realizedPNL.toFixed(2)}</Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Unrealized PNL</Text>
            <Text style={[styles.statValue, { color: '#00C087' }]}>
              +${unrealizedPNL.toFixed(2)}
            </Text>
          </View>
          <View style={styles.statItem}>
            <Text style={styles.statLabel}>Margin Usage</Text>
            <Text style={styles.statValue}>{marginUsage.toFixed(2)}%</Text>
          </View>
        </View>

        <View style={styles.positionsContainer}>
          <FlashList
            data={positions}
            renderItem={renderPositionItem}
            estimatedItemSize={80}
            keyExtractor={(item) => item.symbol + item.date}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#000000',
  },
  container: {
    flex: 1,
    backgroundColor: '#000000',
    padding: 16,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  walletBalance: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  walletLabel: {
    fontSize: 14,
    color: '#888888',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  actionButton: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    flex: 1,
    marginHorizontal: 5,
  },
  actionText: {
    color: 'white',
    fontSize: 16,
  },
  chartContainer: {
    marginBottom: 20,
  },
  timeFrames: {
    flexDirection: 'row',
    marginBottom: 10,
    gap: 16,
  },
  timeFrame: {
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 15,
  },
  activeTimeFrame: {
    backgroundColor: '#1C1C1E',
  },
  timeFrameText: {
    color: '#888888',
  },
  activeTimeFrameText: {
    color: 'white',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 12,
    color: '#888888',
  },
  statValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
  positionsContainer: {
    flex: 1,
  },
  positionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  positionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#1C1C1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 10,
  },
  positionLeft: {
    flex: 1,
  },
  symbolContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbolIcon: {
    marginRight: 8,
  },
  positionSymbol: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  positionDate: {
    fontSize: 12,
    color: '#888888',
  },
  positionRight: {
    alignItems: 'flex-end',
  },
  positionSize: {
    fontSize: 14,
    color: 'white',
  },
  positionPNL: {
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default Portfolio
