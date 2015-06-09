app.controller('Fab', function ($scope, $rootScope, $element) {
    $scope.buttons = $($element).data('buttons');
    
    $scope.onClick = function (button) {
        if (button.isMain) {
            $scope.isFabOpened = !$scope.isFabOpened;
            $rootScope.isBodyOverflowHidden = $scope.isFabOpened;
        }
    };
});