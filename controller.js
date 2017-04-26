var myApp = angular.module('myApp', []);

myApp.controller('TwitController', ['$scope', function ($scope) {

    $scope.twits = [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
      "Ut enim ad minim veniam",
      "quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    ];

  }]);

