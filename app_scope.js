(function(angular) {
  'use strict';
  alert('test inside ');
angular.module('scopeExample', []).controller('MyController', ['$scope', function($scope) {
  
  alert('test inside 1');
    $scope.username = 'World';

    $scope.sayHello = function() {
  alert('test inside 2');
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);
})(window.angular);
