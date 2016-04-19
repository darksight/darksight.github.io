//alert('myApp ; angular.module myApp');

// var firstApp = angular.module('firstApp', []);
 
//var myApp = angular.module('myApp')

var myApp = angular.module('myApp', [])

.controller('MyAppCtrl', function($scope) {
  //alert('controller ; top');
  $scope.variable = 1;
  $scope.increment = function() {
    $scope.variable += 1;
  }
  //alert('controller ; bottom');
});