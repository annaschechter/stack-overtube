

angular.module('stackOverTubeApp').config(function($stateProvider) {

  $stateProvider.state('allvideos', {
    url: '/allvideos',
    templateUrl: '/views/allvideos.html'
  })
})