import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "../utils/tailwind";

export const CreateIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={tw`h-8 w-8`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="black"
    >
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </Svg>
  );
};
