import { hp } from '@src/themes/dimensions';
import { SvgProps } from '@src/types/svgProps';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const HomeIcon = ({
  width = hp(18),
  height = hp(18),
  fillColor = '#999999',
  strokeColor = '#fff',
  props,
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.77212 8.39949C3.28495 8.77841 3 9.36102 3 9.9782V20C3 20.5305 3.21071 21.0392 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H9V15C9 14.4477 9.44772 14 10 14H14C14.5523 14 15 14.4477 15 15V22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0392 21 20.5305 21 20V9.9782C21 9.36102 20.7151 8.77841 20.2279 8.39949L13.2279 2.95505C12.5057 2.39332 11.4943 2.39332 10.7721 2.95505L3.77212 8.39949Z"
      fill={fillColor}
    />
  </Svg>
);
export default HomeIcon;
