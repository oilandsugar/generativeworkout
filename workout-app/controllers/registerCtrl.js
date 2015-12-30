(function () {
    'use strict';

    angular
        .module('workout-app')
        .controller('registerCtrl', ['$http', '$stateParams', '$rootScope', '$state', 'User', '$cookies', 'Settings', Register]);

    function Register($http, $stateParams, $rootScope, $state, User, $cookies, Settings) {
        console.log('in controller login');
        var vm = this;
        vm.register = function (user) {
            console.log(user);
            $http({
                method: 'POST',
                url: Settings.address + '/router/users/',
                data: {
                    username: user.username,
                    email: user.email,
                    password: user.password,
                    weight: user.weight,
                    height: user.height

                }
            }).then(function successCallback(response) {
                console.log(response.data);
                User.setUser(response.data);
                var auth = "Basic " + btoa(user.username + ':' + user.password);
                $cookies.put('session', auth);
                $http.defaults.headers.common.Authorization = auth;

                $state.go('base.home', {}, {reload: true});

            }, function errorCallback(response) {
                console.log(response);
            });

        }
    }
})();