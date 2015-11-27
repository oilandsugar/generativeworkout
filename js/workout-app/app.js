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
    .state('profile', {
      url: "/profile",
      templateUrl: "js/workout-app/partials/profile.html"
    })
    .state('login', {
      url: "/login",
      templateUrl: "js/workout-app/partials/login.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "js/workout-app/partials/register.html"
    })
});
