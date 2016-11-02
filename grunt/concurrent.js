// Run some tasks in parallel to speed up the build process
module.exports = function( grunt ) {
  var concurrent = {
    server: [
      'copy:styles'
    ],
    test: [
      'copy:styles'
    ],
    dist: [
      'copy:styles',
      'imagemin',
      'svgmin'
    ]
  }

  return concurrent;
};
