app.controller('Company', function ($scope, $rootScope, $element) {
    var $descrBox = $($element).find('.company__descr'),
        $descrViewport = $($element).find('.company__descr-viewport'),
        $showFullDescr = $($element).find('.company__descr-more');
    
    $scope.showFullDescr = function () {
        $descrBox.css({'max-height': $descrViewport.outerHeight()});
        $scope.descrFull = true;
        $scope.descrHidden = false;
    }
    
    if ($descrViewport.outerHeight() > $descrBox.outerHeight()) {
        $scope.descrHidden = true;
    }
});