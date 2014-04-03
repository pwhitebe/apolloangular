'use strict';

/* App Module */

var phonecatApp = angular.module('apolloApp', [
  'ngRoute',
  'apolloAppAnimations',
  'apolloAppControllers',
  'apolloAppFilters',
  'apolloAppServices'
]);

phonecatApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
          when('/faq', {
        templateUrl: 'partials/faq.html',
        controller: 'faqCtrl'
      }).
          when('/main', {
        templateUrl: 'partials/main.html',
        controller: 'mainCtrl'
      }).
          when('/node/:id', {
        templateUrl: 'partials/node.html',
        controller: 'nodeCtrl'
      }).
      when('/phones', {
        templateUrl: 'partials/phone-list.html',
        controller: 'PhoneListCtrl'
      }).
      when('/phones/:phoneId', {
        templateUrl: 'partials/phone-detail.html',
        controller: 'PhoneDetailCtrl'
      }).
      otherwise({
        redirectTo: '/phones'
      });
  }]);
