
const path = require('path');

module.exports = {
  plugins: [
    require('postcss-import')({
      path: path.resolve(__dirname,'src'),
    }),
    require('postcss-cssnext')({
      browsers: ['last 2 versions', '> 5%']
    }),
    require('postcss-reporter')
  ]
};
