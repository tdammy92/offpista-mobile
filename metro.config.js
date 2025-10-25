const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
// metro.config.js
const {
    wrapWithReanimatedMetroConfig,
  } = require('react-native-reanimated/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */


const defaultConfig = getDefaultConfig(__dirname);
const { assetExts, sourceExts } = defaultConfig.resolver;

const config = wrapWithReanimatedMetroConfig({
  transformer: {
    babelTransformerPath: require.resolve(
      "react-native-svg-transformer/react-native"
    )
  },
  resolver: {
    assetExts: assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...sourceExts, "svg"]
  }
});

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
