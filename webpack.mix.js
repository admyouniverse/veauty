const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
 .js('resources/assets/js/portal.js', 'public/js')
 .sass('resources/assets/scss/portal.scss', 'public/css', [
 	require('autoprefixer')({
 		browsers: ['last 40 versions'],
 		grid: true
 	})])
 .sourceMaps()
 .version();

 mix.webpackConfig({ devtool: "inline-source-map" });