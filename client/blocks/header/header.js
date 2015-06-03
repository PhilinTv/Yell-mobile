app.controller('Header', function ($scope, $rootScope) {
    var $header = $('.header');
    
	$scope.menuIsOpened = false;
	
	$scope.toggleMenu = function () {
		$scope.menuIsOpened = !$scope.menuIsOpened;
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