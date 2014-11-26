'use strict';

angular.module('stackOverTubeApp').config(['$urlRouterProvider', '$stateProvider', function($urlRouterProvider, $stateProvider) {

  $urlRouterProvider.otherwise('/');


  $stateProvider

  .state('questions', {
    url: '/questions',
    templateUrl: '/views/questions.html'
  })

  .state('askquestion', {
    url: '/askquestion',
    templateUrl: '/views/askquestion.html'
  })

  .state('tags', {
    url: '/tags',
    templateUrl: '/views/tags.html'
  })

  .state('allvideos', {
    url: '/allvideos',
    templateUrl: '/views/allvideos.html'
  })

   .state('unanswered', {
    url: '/unanswered',
    templateUrl: '/views/unanswered.html'
  })

  .state('register', {
    url: '/register',
    templateUrl: '/views/register.html'
  })

  .state('aboutus', {
    url: '/aboutus',
    templateUrl: '/views/aboutus.html'
  })

  .state('question', {
    url: '/question/:questionId',
    templateUrl: '/views/question.html',
    controller: 'QuestionRetrieverCtrl'
  });

}]);