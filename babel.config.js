module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    ['module-resolver', {
      root: [
        './src',
      ],
      'alias': {
        'assets': './src/assets',
        'components': './src/components',
        'helpers': './src/helpers',
        'routes': './src/routers/',
        'shared': './src/shared/',
        'hoc': './src/hoc/',
      }
    }],
  ],

};
