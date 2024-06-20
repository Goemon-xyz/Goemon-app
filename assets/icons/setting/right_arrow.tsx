import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function RightArrowSVG(props: any) {
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
        d="M12.95 9.908L8.233 5.2A.834.834 0 107.05 6.375l4.125 4.166-4.125 4.125a.833.833 0 00.27 1.36.834.834 0 00.913-.184l4.717-4.709a.835.835 0 000-1.225z"
        fill={props.isDark ? 'rgba(136, 136, 145, 1)' : 'rgba(115, 115, 115, 1)'}
      />
    </Svg>
  )
}

export default RightArrowSVG
