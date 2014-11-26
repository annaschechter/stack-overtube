'use strict';


app.controller('AskquestionsCtrl', function ($scope, $http, $location) {
  
   $scope.addQuestion = function() {
   // $http.post('data/questions.json', {'question': $scope.question})
      console.log($scope.title);
      console.log($scope.description);
      console.log($scope.codesnippet);
      console.log($scope.github);
      $location.path("/questions");
    }

  });



app.controller('questionRetriever', function ($scope, $routeParams) {

  console.log($routeParams)
  $scope = $routeParams

 

  });