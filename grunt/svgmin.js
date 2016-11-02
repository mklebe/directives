module.exports = function( grunt ) {
  var svgmin = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= grunt.appConfig.app %>/images',
        src: '{,*/}*.svg',
        dest: '<%= grunt.appConfig.dist %>/images'
      }]
    }
  }
}
