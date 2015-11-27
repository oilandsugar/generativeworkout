angular.module('workout-app', ['ui.router']);

angular.module('workout-app').config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "js/workout-app/partials/home.html"
    })
    .state('state2', {
      url: "/profile",
      templateUrl: "js/workout-app/partials/profile.html"
    })
});
