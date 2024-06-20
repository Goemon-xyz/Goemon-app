import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function SunSVG(props: any) {
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
        d="M4.7 14.666l-.592.592a.833.833 0 000 1.175.833.833 0 001.175 0l.592-.592A.833.833 0 004.7 14.666zm-.533-4.167a.833.833 0 00-.834-.833H2.5a.833.833 0 100 1.667h.833a.833.833 0 00.834-.834zM10 4.666a.833.833 0 00.833-.833v-.834a.833.833 0 10-1.666 0v.834a.833.833 0 00.833.833zM4.7 6.374a.833.833 0 001.175 0 .833.833 0 000-1.175l-.592-.591a.833.833 0 00-1.175 1.175l.592.591zm10 .242a.833.833 0 00.583-.242l.592-.591a.835.835 0 00-.238-1.41.833.833 0 00-.937.235l-.533.591a.833.833 0 000 1.175.833.833 0 00.55.242H14.7zm2.8 3.05h-.833a.833.833 0 000 1.667h.833a.833.833 0 000-1.667zM10 16.333a.833.833 0 00-.833.833v.833a.833.833 0 101.666 0v-.833a.833.833 0 00-.833-.833zm5.3-1.667a.834.834 0 00-1.133 1.133l.591.592a.833.833 0 001.175 0 .833.833 0 000-1.175l-.633-.55zM10 5.916a4.583 4.583 0 104.583 4.583A4.591 4.591 0 0010 5.916zm0 7.5a2.917 2.917 0 110-5.833 2.917 2.917 0 010 5.833z"
        fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(24, 24, 24, 1)'}
      />
    </Svg>
  )
}

export default SunSVG
