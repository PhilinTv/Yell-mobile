app.controller('YandexMap', function ($scope, $rootScope, $element) {
    ymaps.ready(init);
    var map;

    function init(){     
        map = new ymaps.Map($($element)[0], {
            center: [55.76, 37.64],
            zoom: 9
        });
    }
});