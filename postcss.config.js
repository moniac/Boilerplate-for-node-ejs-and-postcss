module.exports = {
	plugins: [
		require( 'postcss-preset-env' ),
		require('postcss-import'),
		require('postcss-mixins'),
		require('postcss-nested'),
		require('postcss-custom-properties'),
		require('postcss-custom-media'),
		require('postcss-discard-comments')({
			discardComments: {
				removeAll: true
			}
		}),
		require('css-mqpacker'),
		require( 'cssnano' )( {
			autoprefixer: false
		} )
	]
}