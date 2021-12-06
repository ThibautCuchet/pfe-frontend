import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "../utils/tailwind";

export const ViewGridIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={tw`h-8 w-8`}
      viewBox="0 0 20 20"
      fill="black"
    >
      <Path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </Svg>
  );
};
