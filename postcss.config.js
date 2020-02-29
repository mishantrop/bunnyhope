module.exports = () => ({
  // The list of plugins for PostCSS
  // https://github.com/postcss/postcss
  plugins: [
    require('postcss-import')(),
    require('postcss-custom-properties')({
      preserve: false,
    }),
    require('postcss-custom-media')(),
    require('postcss-media-minmax')(),
    require('postcss-custom-selectors')(),
    require('postcss-nesting')(),
    require('postcss-mixins')(),
    require('postcss-nested')(),
    require('postcss-color-function')(),
    require('postcss-selector-not')(),
    require('postcss-flexbugs-fixes')(),
    require('autoprefixer')(),
  ],
});
