import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "../utils/tailwind";

export const ProfileIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={tw`h-8 w-8`}
      viewBox="0 0 20 20"
      fill="black"
    >
      <Path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </Svg>
  );
};
