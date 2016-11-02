module.exports = function( grunt ) {
  var imagemin = {
    dist: {
      files: [{
        expand: true,
        cwd: '<%= yeoman.app %>/images',
        src: '{,*/}*.{png,jpg,jpeg,gif}',
        dest: '<%= yeoman.dist %>/images'
      }]
    }
  }

  return imagemin;
}
