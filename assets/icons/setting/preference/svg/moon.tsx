import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function MoonSVG(props: any) {
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
        d="M18.033 11.333a.834.834 0 00-.875-.117c-.88.404-1.839.611-2.808.609a6.791 6.791 0 01-6.783-6.75 7.158 7.158 0 01.208-1.667.833.833 0 00-1.108-.942 8.45 8.45 0 1011.666 9.742.834.834 0 00-.3-.875zm-7.916 5.575A6.783 6.783 0 015.9 4.85v.225a8.458 8.458 0 0010.2 8.266 6.759 6.759 0 01-5.983 3.6v-.033z"
        fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(115, 115, 115, 1)'}
      />
    </Svg>
  )
}

export default MoonSVG
