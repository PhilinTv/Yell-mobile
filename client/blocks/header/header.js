app.controller('Header', function ($scope, $rootScope, $element) {
    var $header = $($element);
    
    $scope.toggleMenu = function () {
        $scope.isMenuOpened = !$scope.isMenuOpened;
        $rootScope.isBodyOverflowHidden = $scope.isMenuOpened;
    };
    
    $scope.fixedHeader = function () {
        if ($(window).scrollTop() > $header.offset().top) {
            $scope.isHeaderFixed = true;
        }
        else {
            $scope.isHeaderFixed = false;
        }
    };
    
    $(window).on('scroll', function () {
        $scope.fixedHeader();
    });
    
    $scope.fixedHeader();
});