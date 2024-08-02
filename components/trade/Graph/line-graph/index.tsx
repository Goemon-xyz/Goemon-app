import { useState, useEffect } from 'react'
import { View } from 'react-native'
import * as d3 from 'd3'
import Svg, { Path, G, Line, Text, Rect, Circle } from 'react-native-svg'

export type LineGraphProps = {
  data: number[]
  dates?: string[]
  color: string
  label: string
  stat: string
  showXAxis?: boolean
  showYAxis?: boolean
}

const GRAPH_ASPECT_RATIO = 296 / 393
const PADDING = 40

function LineGraph({
  data,
  dates = ['13/04', '25/04', '07/05', '15/05'],
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
    .range([0, width - 153])

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

  // Generate 3 equidistant y-axis ticks
  const yTicks = yScale.ticks(5)
  const xTicks = d3.range(data.length).filter((d, i) => i % Math.ceil(data.length / 5) === 0)

  const lastValue = data[data.length - 1]
  const lastX = xScale(data.length - 1)
  const lastY = yScale(lastValue)

  return (
    <View style={{ flex: 1 }} onLayout={(ev) => setWidth(ev.nativeEvent.layout.width - 40)}>
      {width > 0 && height > 0 && (
        <Svg width={width + PADDING} height={height}>
          {/* Background */}
          <Rect width={width + PADDING} height={height} fill="#0D0D0C" />
          {/* Background X and Y Axes */}
          {showXAxis && (
            <G>
              {xTicks.map((tick, i) => (
                <G key={`x-axis-${i}`}>
                  <Line
                    x1={xScale(tick)}
                    y1={0}
                    x2={xScale(tick)}
                    y2={height}
                    stroke="#3A3A3E"
                    strokeWidth={0.15}
                  />
                  <Text
                    x={xScale(tick)}
                    y={height + 20}
                    fill="rgba(107, 107, 107, 1)"
                    fontSize="10"
                    textAnchor="start"
                  >
                    {dates[tick]}
                  </Text>
                </G>
              ))}
            </G>
          )}
          {showYAxis && (
            <G>
              {yTicks.map((tick, i) => (
                <G key={`y-axis-${i}`}>
                  <Line
                    x1={0}
                    y1={yScale(tick)}
                    x2={width}
                    y2={yScale(tick)}
                    stroke="#3A3A3E"
                    strokeWidth={0.15}
                  />
                  <Text
                    x={width + 5}
                    y={yScale(tick)}
                    fill="rgba(107, 107, 107, 1)"
                    fontSize="10"
                    alignmentBaseline="middle"
                  >
                    {tick}
                  </Text>
                </G>
              ))}
            </G>
          )}
          {/* Line and Area */}
          <Path d={svgLine} fill="none" stroke={color} strokeWidth={0.8} />
          <Path d={svgArea} fill={color} fillOpacity={0.3} />
          {/* Bob for the last value */}
          <Circle cx={lastX} cy={lastY} r={4} fill={'rgba(47, 176, 217, 1)'} />
          {/* Dotted line from the bob to the label */}
          <Line
            x1={lastX}
            y1={lastY}
            x2={width - 10}
            y2={lastY}
            stroke="rgba(47, 176, 217, 1)"
            strokeWidth={0.5}
            strokeDasharray="6"
          />
          {/* Label for the last value */}
          <G x={width - 10} y={lastY - 10}>
            <Rect width="50" height="20" fill="rgba(47, 176, 217, 1)" rx="5" ry="5" />
            <Text
              x="25"
              y="10"
              fill="white"
              fontWeight="bold"
              fontSize="10"
              alignmentBaseline="middle"
              textAnchor="middle"
            >
              {lastValue}
            </Text>
          </G>
        </Svg>
      )}
    </View>
  )
}

export default LineGraph
