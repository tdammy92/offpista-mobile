/**
 * This file holds the declarations of all modules that don't have explicit typing
 */

declare module 'react-native-config' {
  export interface NativeConfig {
    ENV: 'dev' | 'prod';
    BASE_URL: string;
    APP_BUILD_TYPE: AppBuildType;
  }

  export const Config: NativeConfig;
  export default Config;
}

declare module '*.svg' {
  import React from 'react';
  import { SvgProps } from 'react-native-svg';
  const content: React.FC<SvgProps>;
  export default content;
}

declare module '*.png';
