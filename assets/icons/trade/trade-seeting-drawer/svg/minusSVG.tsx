import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function minusSVG(props: any) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={50}
      height={50}
      viewBox="0 0 50 50"
      {...props}
    >
      <Path
        d="M25 2C12.317 2 2 12.317 2 25s10.317 23 23 23 23-10.317 23-23S37.683 2 25 2zm12 24H26v11h-2V26H13v-2h11V13h2v11h11v2z"
        fill="#FFF"
      />
    </Svg>
  )
}

export default minusSVG
