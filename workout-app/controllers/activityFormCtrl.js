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
            activity.date = activity.date.replace(/\//g, '-').replace(' ', 'T');
            var time;
            if (activity.duration.hours != 0 && typeof  activity.duration.hours != 'undefined') {
                time = activity.duration.hours + ":";
            } else {
                time = '00:'
            }
            time += activity.duration.min + "[:" + activity.duration.sec +']';
            console.log(time);
            console.log(activity.date);
            $http({
                method: 'POST',
                url: 'http://168.235.153.11/router/activity/',
                data: {
                    date: activity.date,
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