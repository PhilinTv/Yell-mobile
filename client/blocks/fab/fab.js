app.controller('Fab', function ($scope, $rootScope) {
    $scope.toggleFab = function () {
        $scope.isFabOpened = !$scope.isFabOpened;
        $rootScope.isBodyOverflowHidden = $scope.isFabOpened;
    };
});