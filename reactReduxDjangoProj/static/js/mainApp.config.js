(function() {
  'use strict'

  angular.module('mainApp.demo')
    .config(['$routeProvider', config])
    .run(['$http', run]);

  function config($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/static/html/mainApp.html',
        controller: 'MainAppController'
      })
      .when('/login', {
        templateUrl: '/static/html/login.html',
        controller: 'LoginController'
      })
      .otherwise('/');
  }

  function run($http) {
    $http.defaults.xsrfHeaderName = 'X-CSRFToken';
    $http.defaults.xsrfCookieName = 'csrftoken';
  }
})();