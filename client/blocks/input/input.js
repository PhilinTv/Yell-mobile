app.controller('Input', function ($scope, $rootScope, $element, $http, $compile) {
    var $control = $($element).find('.input__control'),
        $dropdown = $($element).find('.input__dropdown'),
        autocomplete = $control.data('autocomplete'),
        keyupTimeout;
    
    $scope.keyup = function () {
        var params = {};
        
        if (keyupTimeout) {
            clearTimeout(keyupTimeout);
        }
        
        keyupTimeout = setTimeout(function () {
            if (autocomplete && $control.val().length >= 3) {
                params[autocomplete.queryParam] = $control.val();
                
                var template = $('#' + autocomplete.tpl).html()
                
                $scope.data = _data;
                $dropdown.html($compile(template)($scope));

                /*$http({
                    url: autocomplete.url,
                    params: params,
                    withCredentials: true
                }).
                success(function(data, status) {
                    $scope.autocomplete = data;
                }).
                error(function(data, status) {
                });*/
            }
        }, 300);
    };
});