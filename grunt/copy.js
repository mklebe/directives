// Copies remaining files to places other tasks can use
module.exports = function( grunt ) {

  var copy = {
    dist: {
      files: [{
        expand: true,
        dot: true,
        cwd: '<%= grunt.appConfig.app %>',
        dest: '<%= grunt.appConfig.dist %>',
        src: [
          '*.{ico,png,txt}',
          '.htaccess',
          '*.html',
          'views/{,*/}*.html',
          'images/{,*/}*.{webp}',
          'fonts/*'
        ]
      }, {
        expand: true,
        cwd: '.tmp/images',
        dest: '<%= grunt.appConfig.dist %>/images',
        src: ['generated/*']
      }, {
        expand: true,
        cwd: 'bower_components/bootstrap/dist',
        src: 'fonts/*',
        dest: '<%= grunt.appConfig.dist %>'
      }]
    },
    styles: {
      expand: true,
      cwd: '<%= grunt.appConfig.app %>/styles',
      dest: '.tmp/styles/',
      src: '{,*/}*.css'
    }
  }

  return copy;
}
