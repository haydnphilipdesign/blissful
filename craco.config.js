const CracoLessPlugin = require('craco-less');

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#658352' }, // Set primary color to match branding
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
