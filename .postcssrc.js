const tailwindcss = require("tailwindcss");
const cssnano = require("cssnano");
const purgeCss = require("@fullhuman/postcss-purgecss");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    cssnano({
      preset: [
        "default",
        {
          discardComments: {
            removeAll: true
          }
        }
      ]
    }),
    purgeCss({
      content: [`./public/*html`, `./src/**/*.vue`],
      defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
    })
  ]
};
