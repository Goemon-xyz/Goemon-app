import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function MinusSVG(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M19 11H5a1 1 0 000 2h14a1 1 0 000-2z" fill="#303033" />
    </Svg>
  )
}

export default MinusSVG
