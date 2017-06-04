(function() {
  'use strict';
  angular.module('mainApp.demo', ['ngRoute']).controller('MainAppController', ['$scope', '$http', 'Login', MainAppController]);

  function MainAppController($scope, $http, Login) {
    $scope.add = function(list, title) {
      var card = {
        list: list.id,
        title: title
      };
      $http.post('/mainApp/cards/', card).then(function(response) {
        list.cards.push(response.data);
      }, function() {
        alert('Could not create card')
      });
    };

    Login.redirectIfNotLoggedIn();
    if (Login.isLoggedIn()) {
      $scope.data = [];
      $scope.logout = Login.logout;
      $scope.sortBy="story_points";
      $scope.reverse=true;
      $scope.showFilters=false;

      $http.get('/mainApp/lists/').then(function(response) {
        $scope.data = response.data;
      });
    }
  }
}());
