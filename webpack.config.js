path = require('path');

module.exports = {
	mode: 'production',
	entry: './src/index.js',
  	output: {
    	path: path.resolve(__dirname, '../dist'),
    	filename: 'simple-carousel.js'
  	}
};