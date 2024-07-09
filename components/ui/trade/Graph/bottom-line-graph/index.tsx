import { useState, useEffect } from 'react'
import { View } from 'react-native'
import * as d3 from 'd3'
import Svg, { Path, G, Line, Text } from 'react-native-svg'

export type LineGraphProps = {
  data: number[]
  color: string
  label: string
  stat: string
  showXAxis?: boolean
  showYAxis?: boolean
}

const GRAPH_ASPECT_RATIO = 53 / 393

function BottomLineGraph({
  data,
  color,
  label,
  stat,
  showXAxis = true,
  showYAxis = true,
}: LineGraphProps) {
  const [width, setWidth] = useState(0)
  const height = width * GRAPH_ASPECT_RATIO

  const min = Math.min(...data)
  const max = Math.max(...data)

  const yScale = d3.scaleLinear().domain([min, max]).range([height, 0])
  const xScale = d3
    .scaleLinear()
    .domain([0, data.length - 1])
    .range([0, width])

  const lineFn = d3
    .line<number>()
    .x((d, i) => xScale(i))
    .y((d) => yScale(d))

  const areaFn = d3
    .area<number>()
    .x((d, i) => xScale(i))
    .y0(height)
    .y1((d) => yScale(d))

  const svgLine = lineFn(data)
  const svgArea = areaFn(data)

  return (
    <View style={{ flex: 1 }} onLayout={(ev) => setWidth(ev.nativeEvent.layout.width)}>
      {width > 0 && height > 0 && (
        <Svg width={width} height={height}>
          {/* Background X and Y Axes */}
          {showXAxis && (
            <G>
              {data.map((_, i) => (
                <Line
                  key={`x-axis-${i}`}
                  x1={xScale(i)}
                  y1={0}
                  x2={xScale(i)}
                  y2={height}
                  stroke="#3A3A3E"
                  strokeWidth={0.15}
                />
              ))}
            </G>
          )}
          {showYAxis && (
            <G>
              {yScale.ticks().map((tick, i) => (
                <Line
                  key={`y-axis-${i}`}
                  x1={0}
                  y1={yScale(tick)}
                  x2={width}
                  y2={yScale(tick)}
                  stroke="#3A3A3E"
                  strokeWidth={0.15}
                />
              ))}
            </G>
          )}
          {/* Line and Area */}
          <Path d={svgLine} fill="none" stroke={color} strokeWidth={0.8} />
          <Path d={svgArea} fill={color} fillOpacity={0.3} />
        </Svg>
      )}
    </View>
  )
}

export default BottomLineGraph
