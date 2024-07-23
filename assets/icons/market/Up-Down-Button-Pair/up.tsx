import * as React from 'react'
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg'

function UpSVG({ color }) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M14.152 1.349a1 1 0 00-1-1h-9a1 1 0 000 2h8v8a1 1 0 102 0v-9zM1.555 14.359L13.86 2.056 12.445.642.14 12.945l1.414 1.415z"
        fill={color}
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_2554_3570"
          x1={4.32141}
          y1={9.24216}
          x2={11.975}
          y2={11.9975}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#9DE7BD" />
          <Stop offset={1} stopColor="#36CD77" />
        </LinearGradient>
      </Defs>
    </Svg>
  )
}

export default UpSVG
