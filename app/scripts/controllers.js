'use strict';

var controllers = angular.module('controllers', []);

controllers.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

controllers.controller('ExampleCtrl', ['$scope', 'Example', function ($scope, Example) {
    $scope.examples = Example.query();
}]);


controllers.controller('InstrumentCtrl', ['$scope', 'Instrument', function ($scope, Instrument) {
    $scope.instruments = Instrument.query();
}]);

controllers.controller('RecallCtrl', ['$scope', 'Recall', function ($scope, Recall) {
    $scope.recalls = Recall.query();
    console.log($scope.recalls);
}]);  
  