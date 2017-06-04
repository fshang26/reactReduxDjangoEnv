(function() {
  'use strict';

  angular.module('mainApp.demo').service('Login', ['$http', '$location', Login]);

  function Login($http, $location) {
    this.login = login;
    this.isLoggedIn = isLoggedIn;
    this.logout = logout;
    this.redirectIfNotLoggedIn = redirectIfNotLoggedIn;

    function login(credentials) {
      return $http.post('/authAPIApp/login/', credentials).then(function (response) {
        localStorage.currentUser = JSON.stringify(response.data); // safari in private mode doesn't support localStorage
      });
    }

    function isLoggedIn() {
      return !!localStorage.currentUser;
    }

    function logout() {
      delete localStorage.currentUser;
      $http.get('/authAPIApp/logout/').then(function() {
        $location.url('/login');
      });
    }

    function redirectIfNotLoggedIn() {
      if (!isLoggedIn()) {
        $location.url('/login');
      }
    }
  }
})();