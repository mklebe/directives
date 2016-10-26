'use strict';

/**
 * @ngdoc directive
 * @name directivesApp.directive:teaser
 * @description
 * # teaser
 */


angular.module('directivesApp')
  .directive('teaser', function ( ) {

    return {
      templateUrl: function( ) {
        //console.log( attr );
        return 'views/directives/teaser.html';
      },
      restrict: 'E',
			replace: true,
      transclude: true,
      scope: {},
      //compile: teaserCompile,
      // adding content to the view
      link: function( scope, element, attrs, controller, transclusionFn ) {
        if( attrs.fontSize === 'extra-large' ) {
          console.log( element );
          element.addClass('teaser--hero');
        }
        transclusionFn( scope, function( clone ) {
          scope.headline = clone[1].innerText;
          scope.bodytext = clone[3].innerText;
        } );
      }
    };
  });
