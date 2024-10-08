import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

interface Props {
  isDark: boolean | undefined
}

function CrossSVG({ isDark }: Props) {
  return (
    <Svg
      fill={isDark ? '#fff' : '#000'}
      height="20px"
      width="20px"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 490 490"
      xmlSpace="preserve"
    >
      <Path d="M456.851 0L245 212.564 33.149 0 0.708 32.337 212.669 245.004 0.708 457.678 33.149 490 245 277.443 456.851 490 489.292 457.678 277.331 245.004 489.292 32.337z" />
    </Svg>
  )
}

export default CrossSVG
