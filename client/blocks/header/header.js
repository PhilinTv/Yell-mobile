app.controller('Header', function ($scope, $rootScope) {
	$scope.menuIsOpened = false;
	
	$scope.toggleMenu = function () {
		$scope.menuIsOpened = !$scope.menuIsOpened;
	};
});