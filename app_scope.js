angular.module('scopeExample', [])
.controller('MyController', ['$scope', function($scope) {
    alert('inside sayHello');
  $scope.username = 'World';

  $scope.sayHello = function() {
    alert('inside sayHello');
    $scope.greeting = 'Hello ' + $scope.username + '!';
  };
}]);
