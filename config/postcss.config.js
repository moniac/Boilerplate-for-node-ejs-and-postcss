module.exports = {
	plugins: [
		require( 'postcss-preset-env' ),
		require( 'postcss-import' ),
		require( 'postcss-mixins' ),
		require( 'postcss-nested' ),
		require( 'postcss-custom-properties' ),
		require( 'postcss-custom-media' ),
		require( 'css-mqpacker' )( {
			sort: true
		} ),
		require( 'autoprefixer' )( {grid: true, flexbox: true} )
	]
}