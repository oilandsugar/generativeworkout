angular.module('workout-app', ['ui.router', 'timer', 'ngCookies']);
angular.module('workout-app').config(function ($stateProvider, $urlRouterProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/login");
    //
    // Now set up the states
    $stateProvider
        .state('base', {
            templateUrl: "workout-app/partials/base.html",
            controller: "MainController as main"
        })
        .state('base.home', {
            url: "/home",
            templateUrl: "workout-app/partials/home.html"
        })
        .state('workout', {
            url: "/workout",
            templateUrl: "workout-app/partials/workout.html"
        })
        .state('workout.list', {
            url: "list",
            templateUrl: "workout-app/partials/home.list.html",
            controller: function ($scope) {
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
            templateUrl: "workout-app/partials/profile.html"
        })
        .state('base.login', {
            url: "/login",
            templateUrl: "workout-app/partials/login.html",
            controller: "loginCtrl as login"
        })
        .state('base.register', {
            url: "/register",
            templateUrl: "workout-app/partials/register.html",
            controller: "registerCtrl as reg"
        })
        //Activity state
        .state('base.create_activity', {
            url: "/create/activity",
            templateUrl: "workout-app/partials/activity_form.html",
            controller: "activityFormCtrl as activityForm"
        }).state('base.activity_list', {
            url: "/activity/:date",
            templateUrl: "workout-app/partials/activity_list.html",
            controller: "activityListCtrl as ctrlActivity"
        }).state('logout', {
            url: "/logout",
            controller: "logoutCtrl"
        })


    ;
});
