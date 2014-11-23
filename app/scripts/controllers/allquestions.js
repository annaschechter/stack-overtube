'use strict';


angular.module('stackOverTubeApp').controller('AllquestionsCtrl', function ($scope,$http) {

      var getQuestions = function () {
        return $http.get('data/questions.json').then(function(response) {
          $scope.questions = response.data;
        return response;
       })
      };


      getQuestions();






  });
