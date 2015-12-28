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
                vm.total_distance = data.distance_total;
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
                        shared: false,
                        formatter: function () {
                            var text = '';
                            if (this.series.name == 'Running') {
                                text = this.x +
                                    '<br>You have run '+Highcharts.numberFormat(this.y, 2)+' km';
                            } else {
                                text = this.x +
                                    '<br>Your pace is ' + Highcharts.numberFormat(this.y, 2)+ ' min/km';
                            }
                            return text;
                        }
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
                var running = {name: 'Running', data: []};
                var pace = {name: 'Running Pace', data: []};
                vm.total_time= moment.duration();
                vm.activities.forEach(function (entry) {
                    if (entry.distance != null) {
                        var date = moment(entry.date).locale("en").format('ll');
                        categories.push(date);
                        running.data.push(entry.distance);
                        var minutes = moment.duration(entry.duration).asMinutes();
                        pace.data.push(Math.round((minutes / entry.distance) * 1e2) / 1e2);
                        vm.total_time = moment.duration(vm.total_time) + moment.duration(entry.duration);
                    }
                });
                options.xAxis.categories = categories;
                options.series.push(running);
                options.series.push(pace);
                vm.total_time = moment.duration(vm.total_time).asMinutes();
                $('#container').highcharts(options);
            },
            function (reason) {
                console.log(reason);
            }
        );
        //vm.distance_total = vm.data.distance_total;
        //vm.activities = vm.data.activity;

    }
})();