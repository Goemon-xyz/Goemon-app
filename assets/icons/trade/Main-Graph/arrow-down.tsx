import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function FillArrowDownSVG(props) {
  return (
    <Svg
      width={7}
      height={6}
      viewBox="0 0 7 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M3.5 5.5L.469.25H6.53L3.5 5.5z" fill="#888891" />
    </Svg>
  )
}

export default FillArrowDownSVG
