jQuery(function ($) {
    var axis = {
        x: {
            scrollX: true,
            scrollY: false,
            eventPassthrough: true
        }
    };

    $('.scroller').each(function () {
        var config = $(this).data('config');

        new IScroll(this, asix[config.axis]);
    });
});