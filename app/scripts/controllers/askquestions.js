'use strict';

app.controller('AskquestionsCtrl', function ($scope, $http, $location) {

      $scope.addQuestion = function () {
        console.log($scope.title);
        console.log($scope.description);
        console.log($scope.codesnippet);
        console.log($scope.github);
      };

  });