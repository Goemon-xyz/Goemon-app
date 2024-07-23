import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SortAmountSVG(props: any) {
  return (
    <Svg
      width={props.width || 14}
      height={props.height || 14}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M3.907 8.24l-.157.163V4.292a.542.542 0 00-1.083 0v4.11L2.51 8.24a.544.544 0 00-.77.77l1.084 1.083c.051.05.112.088.178.114a.51.51 0 00.412 0 .542.542 0 00.179-.114L4.676 9.01a.544.544 0 00-.769-.77zm2.551-3.407h5.417a.542.542 0 100-1.083H6.458a.542.542 0 000 1.083zm5.417 1.625H6.458a.542.542 0 000 1.084h5.417a.542.542 0 100-1.084zm0 2.709H6.458a.542.542 0 100 1.083h5.417a.542.542 0 000-1.083z"
        fill={props.fill || '#fff'}
      />
    </Svg>
  )
}

export default SortAmountSVG
