const path = require('path')



module.exports = {
  outputDir: path.resolve(__dirname, './api/public'),
  devServer: {
    proxy: {
      '/login': {
        target: 'http://localhost:3000'
      },
      '/register': {
        target: 'http://localhost:3000'
      },
    }
  }
};
