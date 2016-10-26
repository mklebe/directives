'use strict';

/**
 * @ngdoc directive
 * @name directivesApp.directive:carousel
 * @description
 * # carousel
 */
angular.module('directivesApp')
  .directive('carousel', function () {
    return {
      templateUrl: function( ) {
				return 'views/directives/carousel.html';
			},
      restrict: 'E',
			replace: true,
      transclude: true,
      scope: {},
      link: function postLink(scope, element, attrs) {
        element.text('this is the carousel directive');
				console.log( attrs );
      }
    };
  });
