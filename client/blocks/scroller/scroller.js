app.controller('Scroller', function ($scope, $rootScope, $element, $http, $compile) {
    var axis, scroller, $container, template;
    
    axis = {
        x: {
            scrollX: true,
            scrollY: false,
            eventPassthrough: true
        }
    };
    
    $scope.config = $($element).data('config') || {};
    scroller = new IScroll($element[0], axis[$scope.config.axis || 'x']);
    $container = $($element).find('.js-container');
    template = $('#' + $scope.config.tpl).html();
    
    $($element).addClass('js-inited');
    
    $scope.ajaxLoad = function () {
        $scope.isLoading = true;
        
        $http.get($scope.config.url).success(function(data, status) {
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

    if ($scope.config.url) {
        $scope.ajaxLoad();
        
        scroller.on('scrollEnd', function () {
            if (this.x && this.x <= this.maxScrollX && !$scope.isLoading && !$scope.isNoData) {
                $scope.ajaxLoad();
            }
        });
    }
});