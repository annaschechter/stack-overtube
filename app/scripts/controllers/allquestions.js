'use strict';


angular.module('stackOverTubeApp').controller('AllquestionsCtrl', function ($scope,$http) {

      var getQuestions = function () {
        return $http.get('data/questions.json').then(function(response) {
          $scope.questions = response.data;
        return response;
       })
      };

      $scope.sortorder = '-views'

      getQuestions();

      $scope.upVoteQuestion = function(question) {
        question.votes++;
      }

      $scope.upViewQuestion = function(question) {
        question.views++;
      }

    });

angular.module('stackOverTubeApp').controller('QuestionRetrieverCtrl', function ($scope, $stateParams, $http){

  $scope.questionId = $stateParams.questionId

      var getBody = function () {
        return $http.get('data/questions.json').then(function(response) {
          $scope.question = response.data[$stateParams.questionId -1]
      })
      };
      getBody()

  });
