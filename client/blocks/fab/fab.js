app.controller('Fab', function ($scope, $rootScope) {
    $scope.toggleFab = function () {
        $scope.fabIsOpened = !$scope.fabIsOpened;
    };
});