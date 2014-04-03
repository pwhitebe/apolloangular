'use strict';

/* Controllers */

var apolloAppControllers = angular.module('apolloAppControllers', []);

apolloAppControllers.controller('PhoneListCtrl', ['$scope', 'Phone',
  function($scope, Phone) {
    $scope.phones = Phone.query();
    $scope.orderProp = 'age';
  }]);

apolloAppControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
  function($scope, $routeParams, Phone) {
    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
      $scope.mainImageUrl = phone.images[0];
    });

    $scope.setImage = function(imageUrl) {
      $scope.mainImageUrl = imageUrl;
    }
  }]);

apolloAppControllers.controller('faqCtrl', ['$scope',
  function($scope){
    $scope.rayes = 'sunny';
}]);

apolloAppControllers.controller('mainCtrl', ['$scope', 
  function($scope){
    $scope.rays = 'sunshine';
}]);

apolloAppControllers.controller('nodeCtrl', ['$scope','$resource','$http','$routeParams',
  function($scope, $resource, $http, $routeParams) {
    var node = $resource('http://localhost:8089/apollo/api/node/:id', {
        id: '@id'
    });

    var labels = $http.get('http://localhost:8089/apollo/api/node/' + $routeParams.id + '/labels')
        .success(function(data){
            $scope.labels = data;
        });

    var relations = $resource('http://localhost:8089/apollo/api/node/:id/relations', {
        id: '@id'
    });

    $scope.node = node.get({
        id: $routeParams.id
    });

    $scope.relations = relations.query({
        id: $routeParams.id
    });
}]);
