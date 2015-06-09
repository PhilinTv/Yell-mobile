app.controller('Scroller', function ($scope, $rootScope, $element, $http, $compile) {
    var axis = {
            x: {
                scrollX: true,
                scrollY: false,
                eventPassthrough: true
            }
        },
        config = $($element).data('config'),
        scroller = new IScroll($element[0], axis[config.axis]),
        $container = $($element).find('.js-container'),
        template = $('#' + config.tpl).html();
    
    $scope.ajaxLoad = function () {
        $scope.isLoading = true;
        
        $http.get(config.url).success(function(data, status) {
            if (data) {
                $scope.data = data;
                $scope.isLoading = false;
                $container.append($compile(template)($scope));
            }
            else {
                $scope.isNoData = true;
            }
                
            setTimeout(function () {
                scroller.refresh();
            }, 50);
        });
    }

    if (config.url) {
        $scope.ajaxLoad();
        
        scroller.on('scrollEnd', function () {
            if (this.x && this.x <= this.maxScrollX && !$scope.isLoading && !$scope.isNoData) {
                $scope.ajaxLoad();
            }
        });
    }
});