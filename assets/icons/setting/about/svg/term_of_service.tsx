import * as React from 'react'
import Svg, { G, Path } from 'react-native-svg'

function TermOfServiceSVG(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(24, 24, 24, 1)'}>
        <Path d="M9.375 3.777A8.09 8.09 0 005 2.5c-.949 0-1.86.163-2.708.462a.625.625 0 00-.417.59v11.875a.625.625 0 00.833.589A6.864 6.864 0 015 15.625c1.663 0 3.186.59 4.375 1.571V3.777zM10.625 17.196A6.845 6.845 0 0115 15.625c.805 0 1.576.138 2.292.391a.625.625 0 00.833-.59V3.553a.625.625 0 00-.417-.59A8.113 8.113 0 0015 2.5a8.09 8.09 0 00-4.375 1.277v13.42z" />
      </G>
    </Svg>
  )
}

export default TermOfServiceSVG
