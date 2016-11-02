// Add vendor prefixed styles
module.exports = function( grunt ) {
  var autoprefixer = {
    options: {
      browsers: ['last 1 version']
    },
    dist: {
      files: [{
        expand: true,
        cwd: '.tmp/styles/',
        src: '{,*/}*.css',
        dest: '.tmp/styles/'
      }]
    }
  }

  return autoprefixer;
}
