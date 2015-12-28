(function () {
    'use strict';

    angular
        .module('workout-app')
        .controller('activityListCtrl', ['$http', '$stateParams', '$state', 'User', 'Activity', ActivityList]);

    function ActivityList($http, $stateParams, $state, User, Activity) {
        console.log('in controller Activity');
        var vm = this;
        vm.myVar = 'allo John';
        var promise = Activity.getActivities();
        promise.then(function (data) {
            vm.data = data;
            vm.distance_total = data.distance_total;
            vm.activities = data.activity;
            var options = {
                title: {
                    text: 'Distance by Date',
                    x: -20 //center
                },
                xAxis: {},
                yAxis: {
                    title: {
                        text: 'Kilometer (km)'
                    },
                    plotLines: [{
                        value: 0,
                        width: 1,
                        color: '#808080'
                    }]
                },
                tooltip: {
                    valueSuffix: 'km'
                },
                legend: {
                    layout: 'vertical',
                    align: 'right',
                    verticalAlign: 'middle',
                    borderWidth: 0
                },
                series: []
            };
            var categories = [];
            var series = [];
            var running = {name: 'Running', data:[]};
            vm.activities.forEach(function (entry) {
                if(entry.distance != null) {
                    var date = moment(entry.date).locale("en").format('ll');
                    categories.push(date);
                    running.data.push(entry.distance)
                }
            });
            options.xAxis.categories = categories;
            series.push(running);
            options.series = series;

            $('#container').highcharts(options);
        }, function (reason) {
            console.log(reason);
        });
        //vm.distance_total = vm.data.distance_total;
        //vm.activities = vm.data.activity;

    }
})();