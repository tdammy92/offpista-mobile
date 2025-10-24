import { hp } from '@src/themes/dimensions';
import { SvgProps } from '@src/types/svgProps';
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const SaveIcon = ({
  width = hp(18),
  height = hp(18),
  fillColor = '#fff',
  strokeColor = '#fff',
  props,
}: SvgProps) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.99994 9.23698C8.99994 8.27767 9.79361 7.5 10.7727 7.5H26.7271C27.7061 7.5 28.4998 8.27767 28.4998 9.23698V27.6301C28.4998 28.3154 27.7277 28.7307 27.1376 28.3628L19.2257 23.4295C18.9354 23.2485 18.5644 23.2485 18.274 23.4295L10.3622 28.3628C9.77209 28.7307 8.99994 28.3154 8.99994 27.6301V9.23698Z"
      fill={fillColor}
      fillOpacity={0.9}
    />
  </Svg>
);
export default SaveIcon;
