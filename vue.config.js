//vue.config.js

module.exports = {
  chainWebpack: (config) => {
    config.plugin("html").tap((args) => {
      args[0].title = "Los Pepitos";
      return args;
    });
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "./src/assets/styles/base.scss";`,
      },
    },
  },
};
