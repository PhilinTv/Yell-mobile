var app = angular.module('app', []);

app.run(function ($rootScope) {});


jQuery(function ($) {
    var icsrollOptions = {
        horizontal: {
            scrollX: true,
            scrollY: false,
            eventPassthrough: true
        }
    };

    $('[data-iscroll]').each(function () {
        var scroller = $(this).find('> *').first(),
            data = $(this).data('iscroll');

        //scroller.width(scroller.find('> *').first().width());

        new IScroll(this, icsrollOptions[data]);
    });
});