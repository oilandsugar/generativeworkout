angular.module('workout-app', ['ui.router'])

.factory('timer', function($interval){
    return function(delay){
        var initialMs= (new Date()).getTime();
        var result = {totalMilliseconds:0, counts:0};
        $interval(function() {
            result.totalMilliseconds = (new Date()).getTime() - initialMs;
            result.counts++;
        }, delay);
        return result;
    };
})

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
    .state('workout', {
      url: "/workout",
      templateUrl: "js/workout-app/partials/workout.html"
    })
    .state('workout.list', {
      url: "list",
      templateUrl: "js/workout-app/partials/home.list.html",
      controller: function($scope) {
        $scope.exercices = [
          {
            name: 'squat',
            reps: 10,
    	      duration: 10,
    	      intensity: 7,
    	      type: 'type',
            body_parts: ['legs'],
    	      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
    	      schema: 'test',
            calories_per_time: 30
          },
          {
            name: 'push up',
            reps: 15,
    	      duration: 5,
    	      intensity: 8,
    	      type: 'type',
            body_parts: ['arms'],
    	      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
    	      schema: 'test',
            calories_per_time: 40
          },
          {
            name: 'something',
            reps: 200,
    	      duration: 20,
    	      intensity: 8,
    	      type: 'type',
            body_parts: ['arms'],
    	      instructions: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. In gravida libero turpis, nec mattis odio imperdiet at. Maecenas venenatis tincidunt lacinia. Phasellus finibus augue metus, vel lobortis dui rutrum vitae.',
    	      schema: 'test',
            calories_per_time: 200
          }
        ];
      }
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
    });
});
