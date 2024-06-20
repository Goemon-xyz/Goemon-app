import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function PrivacyPolicySVG(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 10.833a.833.833 0 00-.833.833v2.5a.833.833 0 001.666 0v-2.5a.833.833 0 00-.833-.833zm4.167-3.334V5.833a4.167 4.167 0 00-8.334 0v1.666a2.5 2.5 0 00-2.5 2.5v5.834a2.5 2.5 0 002.5 2.5h8.334a2.5 2.5 0 002.5-2.5V9.999a2.5 2.5 0 00-2.5-2.5zM7.5 5.833a2.5 2.5 0 115 0v1.666h-5V5.833zm7.5 10a.833.833 0 01-.833.833H5.833A.833.833 0 015 15.833V9.999a.833.833 0 01.833-.833h8.334a.833.833 0 01.833.833v5.834z"
        fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(24, 24, 24, 1)'}
      />
    </Svg>
  )
}

export default PrivacyPolicySVG
