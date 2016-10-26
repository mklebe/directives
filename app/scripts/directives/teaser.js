'use strict';

/**
 * @ngdoc directive
 * @name directivesApp.directive:teaser
 * @description
 * # teaser
 */
angular.module('directivesApp')
  .directive('teaser', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the teaser directive');
      }
    };
  });
