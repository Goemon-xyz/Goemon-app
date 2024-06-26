import React, { useEffect } from 'react'
import { useColorScheme } from 'react-native'
import { ThemedView } from '@/components'
import Section from '@/components/ui/home/history-hot-section/section'
import { ClockSVG, FireSVG } from '@/assets/icons/home/history-hot-section'
import useCoinStore from '@/store/useCoinStore'
import { DATA } from '@/constants/tabs/home/history-hot-section'

function HistoryAndHotSection() {
  const colorScheme = useColorScheme()
  const { history, hot, setHistory, setHot } = useCoinStore()

  useEffect(() => {
    const fetchHistory = async () => {
      const historyData = DATA
      setHistory(historyData)
    }

    const fetchHot = async () => {
      const hotData = DATA
      setHot(hotData)
    }
    fetchHistory()
    fetchHot()
  }, [])

  return (
    <ThemedView style={{ backgroundColor: colorScheme === 'dark' ? '#000000' : '#FFFFFF' }}>
      <Section title="History" Icon={ClockSVG} data={history} />
      <Section title="Hot" Icon={FireSVG} data={hot} />
    </ThemedView>
  )
}

export default HistoryAndHotSection
