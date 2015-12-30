(function () {
    'use strict';

    angular
        .module('workout-app')
        .controller('loginCtrl', ['$http', '$stateParams', '$rootScope', '$state', 'User', '$cookies', Login]);

    function Login($http, $stateParams, $rootScope, $state, User, $cookies) {
        console.log('in controller login');
        var vm = this;
        vm.login = function (user) {
            $http({
                method: 'POST',
                url: 'http://localhost:8009/api/auth/',
                headers: {
                    'Authorization': "Basic " +
                    btoa(user.username + ':' + user.password)
                }
                //data: {date: '2013-01-01T20:00', duration:'20:00'}
            }).then(function successCallback(response) {
                User.setUser(response.data);
                var auth = "Basic " + btoa(user.username + ':' + user.password);
                $cookies.put('session', auth);
                $http.defaults.headers.common.Authorization = auth;

                $state.go('base.home', {}, {reload: true});

            }, function errorCallback() {
                // TODO Replace this ugly thing
                console.log('Wrong credential');
            });

        }
    }
})();