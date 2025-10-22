module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
          'moti/skeleton': 'moti/skeleton/react-native-linear-gradient',
        },
      },
    ],
    'react-native-worklets/plugin',
  ],
};
