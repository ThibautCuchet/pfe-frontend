import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "../utils/tailwind";

export const MessageIcon = () => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={tw`h-8 w-8`}
      viewBox="0 0 20 20"
      fill="black"
    >
      <Path
        fill-rule="evenodd"
        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
        clip-rule="evenodd"
      />
    </Svg>
  );
};
