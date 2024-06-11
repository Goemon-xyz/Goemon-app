import * as React from "react";
import Svg, { Path } from "react-native-svg";

function FireSVG(props: any) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.2 5.926A8.4 8.4 0 115.393 8.01c.242-.308.708-.262.951.046.334.423.713.807 1.132 1.145.399.323.944-.058.928-.571a7.172 7.172 0 01.687-3.31 7.23 7.23 0 012.982-3.199c.296-.166.66-.019.812.286A8.362 8.362 0 0016.2 5.926zm.6 8.475a4.8 4.8 0 01-4.8 4.8c-2.296 0-4.225-1.678-4.692-3.818-.112-.515.527-.772.977-.497.583.358 1.24.59 1.921.677.364.046.637-.288.612-.653a7.17 7.17 0 011.578-5.03.536.536 0 01.517-.192A4.801 4.801 0 0116.8 14.4z"
        fill="#FF6838"
      />
    </Svg>
  );
}

export default FireSVG;
