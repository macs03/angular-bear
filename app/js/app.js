(function () {
    var app = angular.module('licoFinder',
        [
            'ngRoute',
            'licoFinder.service',
            'licoFinder.dateController',
            'licoFinder.licorControllers'
        ]);

    app.config(function appConfig ($routeProvider,$locationProvider) {
        $routeProvider
            .when('/',{
                templateUrl: '/angular-beer/app/templates/search.html'
            })
            .when('/all', {
                templateUrl: '/angular-beer/app/templates/all.html'
            })
            .when('/licoreria/:id', {
                templateUrl: '/angular-beer/app/templates/detail.html'
            });
     $locationProvider.html5Mode(false);
    });

})();
