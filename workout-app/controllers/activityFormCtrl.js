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
        $('#activity-date').datetimepicker();

        vm.create = function (activity) {
            console.log(activity);
            var date = activity.date.replace(/\//g, '-').replace(' ', 'T');

            var sec;
            var min;
            var time;

            (activity.duration.sec < 10) ? sec = '0' + activity.duration.sec : sec = activity.duration.sec;
            (activity.duration.min < 10) ? min = '0' + activity.duration.min : min = activity.duration.min;

            if (activity.duration.hours != 0 && typeof  activity.duration.hours != 'undefined') {
                time = activity.duration.hours + ":";
            } else {
                time = '00:'
            }
            time += min + ":" + sec;
            $http({
                method: 'POST',
                url: 'http://localhost/router/activity/',
                data: {
                    date: date,
                    duration: time,
                    distance: activity.distance,
                    repetition: activity.repetition
                }
            }).then(function successCallback(response) {
                console.log(response);
                $state.go('base.home');

            }, function errorCallback(response) {
                alert('failed: ' + response);
            });

        }
    }
})();