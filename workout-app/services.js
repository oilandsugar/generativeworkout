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
    .service('Settings', function () {
        var vm = this;
        //vm.address = 'http://104.233.111.82:8009/';
        vm.address = 'http://localhost:8009/';
    })
    .service('Activity', function (User, $http, $q, Settings) {

        this.getActivities = function (date) {
            if(typeof date == 'undefined' || !moment(date,'D-M-YYYY').isValid()) {
                console.log('date pas valide');
                date = '';
            }
            return $q(function (resolve, reject) {
                $http({
                    method: 'GET',
                    url: Settings.address+'activity?date='+date
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