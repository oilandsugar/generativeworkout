(function () {
    'use strict';

    angular
        .module('workout-app')
        .controller('logoutCtrl', ['$http', '$stateParams', '$rootScope', '$state', 'User', '$cookies', Logout]);

    function Logout($http, $stateParams, $rootScope, $state, User, $cookies) {
        User.setUser(null);
        $cookies.remove('session');
        $http.defaults.headers.common.Authorization = null;

        $state.go('base.home', {}, {reload: true});


    }
})();