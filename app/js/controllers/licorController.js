(function () {
    var app = angular.module('licoFinder.licorControllers',['licoFinder.service']);

    app.controller('searchController',['$scope','listLicorerias',function ($scope,listLicorerias) {
        $scope.licorerias = listLicorerias.licoreriasArray;
    }]);

    app.controller('listController',['$scope','listLicorerias',function ($scope,listLicorerias) {
        console.log("la lista de licorerias");
        $scope.licorerias = listLicorerias.licoreriasArray;
    }]);

    app.controller('detailController',['$scope','$routeParams','listLicorerias',function ($scope,$routeParams,listLicorerias) {

        for (var i = 0; i < listLicorerias.licoreriasArray.length; i++) {
            if (listLicorerias.licoreriasArray[i].id == $routeParams.id) {
                $scope.licoreria = listLicorerias.licoreriasArray[i];
            }
        }

    }]);
})();
