module.exports = {
	plugins: [
		require( 'postcss-preset-env' ),
		require('postcss-import'),
		require('postcss-mixins'),
		require('postcss-nested'),
		require('postcss-custom-media')
	]
}