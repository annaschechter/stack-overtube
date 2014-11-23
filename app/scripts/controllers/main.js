'use strict';

/**
 * @ngdoc function
 * @name stackOverTubeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stackOverTubeApp
 */
angular.module('stackOverTubeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
