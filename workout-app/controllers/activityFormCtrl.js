/**
 * Created by john on 12/22/15.
 */
(function () {
    'use strict';

    angular
        .module('workout-app')
        .controller('activityFormCtrl', ['$http', '$stateParams', '$rootScope', '$state', 'User', ActivityForm]);

    function ActivityForm($http, $stateParams, $rootScope, $state, User) {
        console.log('in controller login');
        var vm = this;
        vm.create = function (activity) {
            console.log(activity);
            $http({
                method: 'POST',
                url: 'http://168.235.153.11/router/activity/',
                data: {
                    date: activity.date,
                    duration: activity.duration,
                    distance: activity.distance,
                    repetition: activity.repetition
                }
            }).then(function successCallback(response) {
                console.log(response);
                $state.go('base.home');

            }, function errorCallback(response) {
                alert('failed: '+ response);
            });

        }
    }
})();