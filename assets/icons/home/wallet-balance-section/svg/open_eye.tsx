import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function OpenEyeSVG({ fillColor }: { fillColor: string }) {
  return (
    <Svg width={26} height={26} viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M23.747 12.567C21.558 7.487 17.442 4.334 13 4.334c-4.441 0-8.558 3.152-10.746 8.233a1.084 1.084 0 000 .867c2.188 5.08 6.305 8.233 10.746 8.233 4.442 0 8.558-3.152 10.747-8.233a1.084 1.084 0 000-.867zM13 19.501c-3.434 0-6.684-2.481-8.558-6.5C6.316 8.98 9.566 6.5 13 6.5s6.684 2.48 8.558 6.5c-1.874 4.019-5.124 6.5-8.558 6.5zm0-10.834a4.333 4.333 0 100 8.667 4.333 4.333 0 000-8.667zm0 6.5a2.167 2.167 0 110-4.334 2.167 2.167 0 010 4.334z"
        fill={fillColor}
      />
    </Svg>
  )
}

export default OpenEyeSVG
