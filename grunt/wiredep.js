// Automatically inject Bower components into the app
module.exports = function( grunt ) {
	var wiredep = {
		options: {
			cwd: '<%= grunt.appConfig.app %>'
		},
		app: {
			src: ['<%= grunt.appConfig.app %>/index.html'],
			ignorePath:  /\.\.\//
		}
	}

	return wiredep;
}
