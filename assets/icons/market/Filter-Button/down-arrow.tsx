import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function DownArrowSVg(props: any) {
  return (
    <Svg
      width={19}
      height={19}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M13.25 7.378a.75.75 0 00-1.058 0L9.5 10.033 6.845 7.378a.75.75 0 10-1.058 1.065l3.18 3.18a.752.752 0 001.065 0l3.218-3.18a.748.748 0 000-1.065z"
        fill={props.fill || '#888891'}
      />
    </Svg>
  )
}

export default DownArrowSVg
