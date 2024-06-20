import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function PrivacySVG(props: any) {
  return (
    <Svg
      width={20}
      height={21}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.339 2.737a.532.532 0 00-.678 0 11.947 11.947 0 01-7.078 2.75.5.5 0 00-.479.425A12.11 12.11 0 002 7.501c0 5.162 3.26 9.564 7.834 11.257a.48.48 0 00.332 0C14.74 17.064 18 12.663 18 7.5c0-.539-.035-1.069-.104-1.589a.5.5 0 00-.48-.425 11.947 11.947 0 01-7.077-2.75zM10 6.501a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 6.5zm0 9a1 1 0 100-2 1 1 0 000 2z"
        fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(24, 24, 24, 1)'}
      />
    </Svg>
  )
}

export default PrivacySVG
