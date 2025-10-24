import { hp } from '@src/themes/dimensions';
import { SvgProps } from '@src/types/svgProps';
import * as React from 'react';
import Svg, { G, Rect, Path, Defs, ClipPath } from 'react-native-svg';

const ShortsIcon = ({
  width = hp(18),
  height = hp(18),
  fillColor = '#fff',
  strokeColor = '#F30745',
  props,
}: SvgProps) => (
  <Svg
    width={width}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_13_1544)">
      <Rect
        x={5}
        y={2}
        width={14}
        height={20}
        rx={2}
        stroke={strokeColor}
        strokeWidth={2}
      />
      <Path
        d="M2.5 4C1.67157 4 1 4.67157 1 5.5V18.5C1 19.3284 1.67157 20 2.5 20"
        stroke={strokeColor}
        strokeWidth={2}
      />
      <Path
        d="M21.5 4C22.3284 4 23 4.67157 23 5.5V18.5C23 19.3284 22.3284 20 21.5 20"
        stroke={strokeColor}
        strokeWidth={2}
      />
      <Path
        d="M9.5 9.74104C9.5 8.96925 10.3372 8.48838 11.0039 8.87726L14.0192 10.6362C14.6807 11.0221 14.6807 11.9779 14.0192 12.3638L11.0039 14.1227C10.3372 14.5116 9.5 14.0308 9.5 13.259V9.74104Z"
        stroke={strokeColor}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_13_1544">
        <Rect width={24} height={24} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default ShortsIcon;
