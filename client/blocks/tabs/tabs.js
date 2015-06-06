app.controller('Tabs', function ($scope, $rootScope, $element, $http, $templateRequest, $compile) {
    var config = $($element).data('config'),
        $container = $($element).find('.js-container');
    
    $scope.switchTab = function ($event) {
        $scope.lineOffset = $($event.target).index() * $($event.target).width();
    }
    
    $scope.ajaxLoad = function () {
        $scope.isLoading = true;
        
        $http.get(config.url).success(function(data, status) {
            if (!data) {
                $scope.isNoData = true;
            }
            
            $scope.data = data;

            $templateRequest(config.tpl).then(function(template) {
                $scope.isLoading = false;
                $container.html($compile(template)($scope));
            });
        });
    }

    if (config.url) {
        $scope.ajaxLoad();
    }
});