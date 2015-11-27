angular.module('workout-app', ['ui.router']);

angular.module('workout-app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/home");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home.html"
    })
    .state('state2', {
      url: "/profile",
      templateUrl: "partials/profile.html"
    })
});
