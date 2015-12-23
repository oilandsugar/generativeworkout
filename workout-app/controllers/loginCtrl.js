(function () {
    'use strict';

    angular
        .module('workout-app')
        .controller('loginCtrl', ['$http', '$stateParams', '$rootScope', '$state', 'User', Login]);

    function Login($http, $stateParams, $rootScope, $state, User) {
        console.log('in controller login');
        var vm = this;
        vm.login = function (user) {
            $http({
                method: 'POST',
                url: 'http://168.235.153.11/api/auth/',
                headers: {
                    'Authorization': "Basic " +
                    btoa(user.username + ':' + user.password)
                }
                //data: {date: '2013-01-01T20:00', duration:'20:00'}
            }).then(function successCallback(response) {
                User.setUser(response.data);
                $http.defaults.headers.common.Authorization = "Basic " +
                    btoa(user.username + ':' + user.password);

                $state.go('base.home', {}, {reload: true});

            }, function errorCallback(response) {
                alert('Wrong credential');
            });

        }
    }
})();