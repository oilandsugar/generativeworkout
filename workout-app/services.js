angular.module('workout-app')
    .service('User', function ($cookies, $http) {
        var vm = this;
        vm.getUser = function () {
            return vm.user;
        };

        vm.setUser = function (user) {
            vm.user = user;
        };
    })
    .service('Activity', function (User, $http, $q) {

        this.getActivities = function () {
            return $q(function (resolve, reject) {
                $http({
                    method: 'GET',
                    url: 'http://localhost/activity'
                }).then(function successCallback(response) {
                    resolve(response.data);
                }, function errorCallback() {
                    reject('Fail to get activity');
                });
                return null;
            })
        }
    })

;