import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

function FaceIdSVG(props: any) {
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
        <Path d="M4.25 2.5A2.25 2.25 0 002 4.75v2a.75.75 0 001.5 0v-2A.75.75 0 014.25 4h2a.75.75 0 000-1.5h-2zM13.75 2.5a.75.75 0 000 1.5h2a.75.75 0 01.75.75v2a.75.75 0 001.5 0v-2a2.25 2.25 0 00-2.25-2.25h-2zM3.5 14.25a.75.75 0 00-1.5 0v2a2.25 2.25 0 002.25 2.25h2a.75.75 0 000-1.5h-2a.75.75 0 01-.75-.75v-2zM18 14.25a.75.75 0 00-1.5 0v2a.75.75 0 01-.75.75h-2a.75.75 0 000 1.5h2A2.25 2.25 0 0018 16.25v-2zM7 10.5a3 3 0 116 0 3 3 0 01-6 0z" />
      </G>
    </Svg>
  )
}

export default FaceIdSVG
