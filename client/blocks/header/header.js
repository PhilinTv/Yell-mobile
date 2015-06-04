app.controller('Header', function ($scope, $rootScope) {
    var $header = $('.header');
	
	$scope.toggleMenu = function () {
		$scope.menuIsOpened = !$scope.menuIsOpened;
	};

    $scope.toggleAction = function () {
        $scope.actionIsOpened = !$scope.actionIsOpened;
    };
    
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > $header.offset().top) {
            $header.setMod('fixed')
        }
        else {
            $header.delMod('fixed')
        }
    })
});