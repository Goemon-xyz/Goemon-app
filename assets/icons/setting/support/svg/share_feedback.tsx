import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function ShareFeedbackSVG(props: any) {
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
        d="M6.667 9.166a.833.833 0 100 1.667.833.833 0 000-1.667zm3.333 0a.833.833 0 100 1.667.833.833 0 000-1.667zm3.333 0a.833.833 0 100 1.666.833.833 0 000-1.666zM10 1.666a8.333 8.333 0 00-8.333 8.333 8.241 8.241 0 001.883 5.275l-1.667 1.667a.833.833 0 00-.175.908.833.833 0 00.792.484H10a8.334 8.334 0 000-16.667zm0 15H4.508l.775-.775a.833.833 0 00.25-.592.833.833 0 00-.25-.583A6.667 6.667 0 1110 16.666z"
        fill={props.isDark ? 'rgba(250, 250, 250, 1)' : 'rgba(24, 24, 24, 1)'}
      />
    </Svg>
  )
}

export default ShareFeedbackSVG
