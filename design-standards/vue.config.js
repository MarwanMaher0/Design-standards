const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({

  transpileDependencies: ["my-dependency"],

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'ar',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: false,
      compositionOnly: true,
      fullInstall: true
    }
  },
  productionSourceMap: false

})
