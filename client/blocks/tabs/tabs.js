app.controller('Tabs', function ($scope, $rootScope, $element, $http, $compile) {
    var config = $($element).data('config'),
        $container = $($element).find('.tabs__content'),
        template = $('#' + config.tpl).html();
    
    $scope.tabs = $($element).data('tabs');
    
    $scope.onTabClick = function (tab, $event) {
        $scope.lineOffset = $($event.target).index() * $($event.target).width();
        
        if (config.url) {
            $scope.ajaxLoad(tab);
        }
    }
    
    $scope.ajaxLoad = function (tab) {
        $scope.isLoading = true;
        
        $http({
            url: config.url,
            params: tab.params
        }).success(function(data, status) {
            if (data) {
                $scope.data = data;
                $scope.isLoading = false;
                $container.html($compile(template)($scope));
            }
            else {
                $scope.isNoData = true;
            }
        });
    }

    if (config.url) {
        $scope.ajaxLoad($scope.tabs[0]);
    }
});