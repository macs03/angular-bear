(function () {
    var app = angular.module('licoFinder.dateController',[]);

    app.controller('dateController', ["$scope",function ($scope) {
        var currentDate = new Date();
        $scope.year = currentDate.getUTCFullYear();
        console.log($scope.year);
    }]);
})();
