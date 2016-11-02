// https://github.com/gruntjs/grunt-contrib-watch
module.exports = function( grunt ) {
	var watch = {
		bower: {
			files: ['bower.json'],
			tasks: ['wiredep']
		},
		js: {
			files: ['<%= grunt.appConfig.app %>/scripts/{,*/}*.js'],
			tasks: ['newer:jshint:all'],
			options: {
				livereload: '<%= connect.options.livereload %>'
			}
		},
		jsTest: {
			files: ['test/spec/{,*/}*.js'],
			tasks: ['newer:jshint:test', 'karma']
		},
		styles: {
			files: ['<%= grunt.appConfig.app %>/styles/{,*/}*.css'],
			tasks: ['newer:copy:styles', 'autoprefixer']
		},
		gruntfile: {
			files: ['Gruntfile.js']
		},
		livereload: {
			options: {
				livereload: '<%= connect.options.livereload %>'
			},
			files: [
				'<%= grunt.appConfig.app %>/{,*/}*.html',
				'.tmp/styles/{,*/}*.css',
				'<%= grunt.appConfig.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
			]
		}
	}

	return watch;
}
