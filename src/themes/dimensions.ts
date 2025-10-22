import { Dimensions, PixelRatio, Platform } from 'react-native';

const { height: SCREEN_HEIGHT, width: SCREEN_WIDTH } = Dimensions.get('screen');

export const isAndroid = Platform.OS === 'android';
export const isIOS = Platform.OS === 'ios';

const frame = { height: 844, width: 390 }; // Frame according to figma design

function normalize(size: number, based = 'width') {
  const newSize =
    based === 'height'
      ? (size * SCREEN_HEIGHT) / frame.height
      : (size * SCREEN_WIDTH) / frame.width;
  return newSize;
}

// for width  pixel
const wp = (size: number) => normalize(size, 'width');

// for height  pixel
const hp = (size: number) => normalize(size, 'height');
// for font  pixel
const fs = (size: number) => {
  return wp(size);
};

const hpt = (heightPercent: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((SCREEN_HEIGHT * heightPercent) / 100);
};

const wpt = (widthPercent: number) => {
  // Use PixelRatio.roundToNearestPixel method in order to round the layout
  // size (dp) to the nearest one that corresponds to an integer number of pixels.
  return PixelRatio.roundToNearestPixel((SCREEN_WIDTH * widthPercent) / 100);
};

export { fs, SCREEN_HEIGHT, SCREEN_WIDTH, hp, wp, hpt, wpt };

export const iconSize = {
  sm: 20,
  md: 24,
  lg: 32,
  xl: 40,
};

export const spacing = {
  xs: 4,
  sm: 8,
  base: 10,
  md: 16,
  lg: 24,
  xl: 32,
};

export const fontSize = {
  xs: fs(10),
  sm: fs(13), //13
  base: fs(14), //14
  md: fs(16),
  lg: fs(20),
  xl: fs(24),
  '2xl': fs(26), // Headings
  '3xl': fs(30), // Large headings
  '4xl': fs(36), // Title
};
