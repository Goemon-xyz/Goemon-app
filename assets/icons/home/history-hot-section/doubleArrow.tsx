import * as React from "react";
import Svg, { G, Path } from "react-native-svg";

function DoubleArrowSVG(props: any) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G fill="#CACACE">
        <Path d="M4.23 13.71a.75.75 0 101.04 1.08l4.5-4.25a.75.75 0 000-1.08l-4.5-4.25a.75.75 0 10-1.04 1.08L8.168 10 4.23 13.71z" />
        <Path d="M10.23 13.71a.75.75 0 101.04 1.08l4.5-4.25a.75.75 0 000-1.08l-4.5-4.25a.75.75 0 10-1.04 1.08L14.168 10l-3.938 3.71z" />
      </G>
    </Svg>
  );
}

export default DoubleArrowSVG;
