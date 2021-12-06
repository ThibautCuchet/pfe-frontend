import React from "react";
import Svg, { Path } from "react-native-svg";
import tw from "../utils/tailwind";

const SvgFillContainer = ({ color, children }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={tw`h-10 w-10`}
      fill="none"
      viewBox="0 0 24 24"
      fill={color}
    >
      {children}
    </Svg>
  );
};

const SvgStrokeContainer = ({ color, children }) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      style={tw`h-10 w-10`}
      fill="none"
      viewBox="0 0 24 24"
      stroke={color}
    >
      {children}
    </Svg>
  );
};

export const CreateIcon = ({ color }) => {
  return (
    <SvgStrokeContainer color={color}>
      <Path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
      />
    </SvgStrokeContainer>
  );
};

export const MessageIcon = ({ color }) => {
  return (
    <SvgFillContainer color={color}>
      <Path
        fill-rule="evenodd"
        d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
        clip-rule="evenodd"
      />
    </SvgFillContainer>
  );
};

export const ProfileIcon = ({ color }) => {
  return (
    <SvgFillContainer color={color}>
      <Path
        fillRule="evenodd"
        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
        clipRule="evenodd"
      />
    </SvgFillContainer>
  );
};

export const StarIcon = ({ color }) => {
  return (
    <SvgFillContainer color={color}>
      <Path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </SvgFillContainer>
  );
};

export const ViewGridIcon = ({ color }) => {
  return (
    <SvgFillContainer color={color}>
      <Path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
    </SvgFillContainer>
  );
};
