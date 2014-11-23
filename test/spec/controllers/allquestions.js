'use strict';

describe('Controller: AllquestionsCtrl', function () {

  // load the controller's module
  beforeEach(module('stackOverTubeApp'));

  var AllquestionsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AllquestionsCtrl = $controller('AllquestionsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
