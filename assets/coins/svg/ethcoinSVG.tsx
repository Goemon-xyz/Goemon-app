import * as React from "react";
import Svg, { Path, G } from "react-native-svg";

function EthcoinSVG(props: any) {
  return (
    <Svg
      width={14}
      height={14}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M8.5 16.5a8 8 0 100-16 8 8 0 000 16z" fill="#627EEA" />
      <G fill="#fff">
        <Path d="M8.5 2.5v4.435l3.748 1.675L8.5 2.5z" fillOpacity={0.602} />
        <Path d="M8.749 2.5L5 8.61l3.749-1.675V2.5z" />
        <Path
          d="M8.5 11.676v3.014l3.751-5.19L8.5 11.676z"
          fillOpacity={0.602}
        />
        <Path d="M8.749 14.69v-3.014L5 9.5l3.749 5.19z" />
        <Path d="M8.5 10.85l3.748-2.176L8.5 7v3.85z" fillOpacity={0.2} />
        <Path d="M5 8.674l3.749 2.177V7L5 8.674z" fillOpacity={0.602} />
      </G>
    </Svg>
  );
}

export default EthcoinSVG;
