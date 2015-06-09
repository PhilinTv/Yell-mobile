app.controller('Header', function ($scope, $rootScope, $element) {
    var $header = $($element);
    
    $scope.toggleSidebar = function () {
        $scope.isSidebarOpened = !$scope.isSidebarOpened;
        $rootScope.isBodyOverflowHidden = $scope.isSidebarOpened;
    };
    
    $scope.fixedHeader = function () {
        if ($(window).scrollTop() > $header.offset().top) {
            $header.addClass('is-fixed');
        }
        else {
            $header.removeClass('is-fixed');
        }
    };
    
    $(window).on('scroll', function () {
        $scope.fixedHeader();
    });
    
    $scope.fixedHeader();
});