import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function DownSVG({ color }) {
  return (
    <Svg width={15} height={15} viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M13.152 14.651a1 1 0 001-1v-9a1 1 0 10-2 0v8h-8a1 1 0 100 2h9zM.14 2.055l12.304 12.303 1.414-1.414L1.555.641.141 2.055z"
        fill={color}
      />
    </Svg>
  )
}

export default DownSVG
