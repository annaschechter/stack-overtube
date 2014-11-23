'use strict';


angular.module('stackOverTubeApp').controller('AllquestionsCtrl', function ($scope,$http) {

      var getQuestions = function () {
        return $http.get('data/questions.json').then(function(response) {
          $scope.questions = response.data;
        return response;
       })
      };

      $scope.sortorder = "-views"

      getQuestions();

      $scope.upVoteQuestion = function(question) {
        question.votes++;
      }

      $scope.upViewQuestion = function(question) {
        question.views++;
      }






  });
