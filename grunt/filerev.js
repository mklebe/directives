// Renames files for browser caching purposes
module.exports = function( grunt ) {
  var filerev = {
    dist: {
      src: [
        '<%= grunt.appConfig.dist %>/scripts/{,*/}*.js',
        '<%= grunt.appConfig.dist %>/styles/{,*/}*.css',
        '<%= grunt.appConfig.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
        '<%= grunt.appConfig.dist %>/styles/fonts/*'
      ]
    }
  }

  return filerev;
}
