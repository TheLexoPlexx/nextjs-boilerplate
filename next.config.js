/** @type {import('next').NextConfig} */

const path = require('path')

module.exports = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "sh_theme/mixins.scss";`
  },
  modularizeImports: {
    'react-icons/': {
      transform: 'react-icons/{{member}}',
    },
  },
}
