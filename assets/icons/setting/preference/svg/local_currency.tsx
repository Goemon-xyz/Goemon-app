import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

function LocalCurrencySVG(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(24, 24, 24, 1)'}>
        <Path d="M17.5 5.813c0 2.243-3.358 4.062-7.5 4.062-4.142 0-7.5-1.819-7.5-4.063C2.5 3.57 5.858 1.75 10 1.75c4.142 0 7.5 1.819 7.5 4.063z" />
        <Path d="M10 11.125c2.238 0 4.325-.489 5.899-1.34a6.904 6.904 0 001.58-1.154c.014.1.021.203.021.306C17.5 11.181 14.142 13 10 13c-4.142 0-7.5-1.819-7.5-4.063 0-.103.007-.205.021-.306a6.901 6.901 0 001.58 1.153c1.574.852 3.661 1.341 5.899 1.341z" />
        <Path d="M10 14.25c2.238 0 4.325-.489 5.899-1.34a6.903 6.903 0 001.58-1.154c.014.1.021.203.021.306 0 2.244-3.358 4.063-7.5 4.063-4.142 0-7.5-1.819-7.5-4.063 0-.103.007-.205.021-.306a6.9 6.9 0 001.58 1.153c1.574.852 3.661 1.341 5.899 1.341z" />
        <Path d="M10 17.375c2.238 0 4.325-.489 5.899-1.34a6.903 6.903 0 001.58-1.154c.014.1.021.203.021.306 0 2.244-3.358 4.063-7.5 4.063-4.142 0-7.5-1.819-7.5-4.063 0-.103.007-.205.021-.306a6.9 6.9 0 001.58 1.153c1.574.852 3.661 1.341 5.899 1.341z" />
      </G>
    </Svg>
  )
}

export default LocalCurrencySVG
