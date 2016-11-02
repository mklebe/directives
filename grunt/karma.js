// Test settings
module.exports = function( grunt ) {
  var karma = {
    unit: {
      configFile: 'test/karma.conf.js',
      singleRun: true
    }
  };

  return karma;
}
