app.controller('Index', function ($scope, $rootScope) {
    $scope.sectionMainHeight = $(window).height() - $('.index').offset().top;
});