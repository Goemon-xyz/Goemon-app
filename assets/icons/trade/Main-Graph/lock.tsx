import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function LockSVG(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M14.667 7.5V5.832a4.167 4.167 0 10-8.334 0v1.666a2.5 2.5 0 00-2.5 2.5v5.834a2.5 2.5 0 002.5 2.5h8.334a2.5 2.5 0 002.5-2.5V9.999a2.5 2.5 0 00-2.5-2.5zM8 5.832a2.5 2.5 0 115 0v1.666H8V5.833zm7.5 10a.833.833 0 01-.833.833H6.333a.833.833 0 01-.833-.833V9.999a.833.833 0 01.833-.833h8.334a.833.833 0 01.833.833v5.834z"
        fill="#fff"
      />
    </Svg>
  )
}

export default LockSVG
