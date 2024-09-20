const HtmlWebpackPlugin = require('html-webpack-plugin');
const crypto = require('crypto');

module.exports = function override(config) {
  // Generate a nonce
  const nonce = crypto.randomBytes(16).toString('base64');

  // Modify HtmlWebpackPlugin to inject the nonce
  config.plugins = config.plugins.map(plugin => {
    if (plugin instanceof HtmlWebpackPlugin) {
      return new HtmlWebpackPlugin({
        ...plugin.options,
        nonce, // Inject nonce into the template
        templateParameters: {
          nonce, // Make nonce available in the HTML template
        },
      });
    }
    return plugin;
  });

  return config;
};
