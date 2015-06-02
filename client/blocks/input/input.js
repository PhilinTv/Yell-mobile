app.controller('Input', function ($scope, $rootScope, $http) {
	$scope.keyup = function ($event) {
        var $element = $($event.target),
            autocomplete = $element.data('autocomplete'),
            params = {};
        
        if (autocomplete && $element.val().length == 3) {
            params[autocomplete.queryParam] = $element.val();
            
            $http({
                url: autocomplete.url,
                params: params,
                withCredentials: true
            }).
            success(function(data, status) {
                $scope.autocomplete = data;
            }).
            error(function(data, status) {
            });
        }
    };
});