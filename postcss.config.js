module.exports = {
  plugins: [
    require('stylelint')({
        config: {
          extends: ['stylelint-config-standard'],
        },
    }),
    require('postcss-import')(),
    require('postcss-preset-env')({
      stage: 0,
      browsers: 'IE 10',
    }),
  ]
};
