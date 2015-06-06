app.controller('Header', function ($scope, $rootScope) {
    var $header = $('.header');
    
    $scope.toggleMenu = function () {
        $scope.isMenuOpened = !$scope.isMenuOpened;
        $rootScope.isBodyOverflowHidden = $scope.isMenuOpened;
    };
    
    $scope.fixedHeader = function () {
        if ($(window).scrollTop() > $header.offset().top) {
            $header.setMod('fixed')
        }
        else {
            $header.delMod('fixed')
        }
    };
    
    $(window).on('scroll', function () {
        $scope.fixedHeader();
    });
    
    $scope.fixedHeader();
});