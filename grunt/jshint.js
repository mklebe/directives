// Make sure code styles are up to par and there are no obvious mistakes
module.exports = function( grunt ) {

  var jshint = {
    options: {
      jshintrc: '.jshintrc',
      reporter: require('jshint-stylish')
    },
    all: {
      src: [
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    test: {
      options: {
        jshintrc: 'test/.jshintrc'
      },
      src: ['test/spec/{,*/}*.js']
    }
  }

  return jshint;
}
