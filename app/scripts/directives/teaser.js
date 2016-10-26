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
        return 'scripts/directives/teaser.html';
      },
      restrict: 'E',
      transclude: true,
      scope: {},
      //compile: teaserCompile,
      // adding content to the view
      link: function( scope, element, attrs, controller, transclusionFn ) {
        console.log( element );
        console.log( controller );
        console.log(attrs);
        if( attrs.fontSize === 'extra-large' ) {
          console.log('hero detected');
          element.addClass('teaser--hero');
        }
        transclusionFn( scope, function( clone ) {
          scope.headline = clone[1].innerText;
          scope.bodytext = clone[3].innerText;
        } );
      }
    };
  });
