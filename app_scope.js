(function(angular) {
  alert('test inside app_scope : ' +'oo');
  'use strict';
var myApp = angular.module('scopeExample', [])
  .controller('MyController', ['$scope', function($scope) {
    alert('test inside 1_1');
    $scope.username = 'World';

    $scope.sayHello = function() {
      
      alert('test inside 1_2');
      $scope.greeting = 'Hello ' + $scope.username + '!';
    };
  }]);
})(window.angular);
