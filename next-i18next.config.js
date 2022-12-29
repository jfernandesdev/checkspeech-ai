const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR","en-US","es"]
  },
  ...(typeof window === undefined
    ? { localePath: path.resolve('./public/locales') }
    : {}),
}