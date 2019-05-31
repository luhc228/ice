const updateMiniCssLoaderPath = require('../utils/updateMiniCssLoaderPath');

module.exports = ({ context, chainWebpack }, value) => {
  const { command, userConfig } = context;
  if (command === 'build') {
    chainWebpack((config) => {
      config.output.publicPath(value);
      updateMiniCssLoaderPath(config, value, userConfig);
    });
  }
};
