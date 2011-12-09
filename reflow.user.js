// ==UserScript==
// @name        reflow
// @namespace   http://fluidapp.com
// @description What does this do?
// @include     jQuery
// @author      http://iamdanielmarino.com
// ==/UserScript==

(function () {

    $('html').addClass('reflow');
    $('head').append('<link rel="stylesheet" href="reflow.user.css">');

    $('body').prepend('<header></header>');

    $('#flow_list').appendTo($('#app_menu'));
    //$('#userlist_button').appendTo($('#app_menu'));

    $('.user_icon').removeClass('ui-corner-all');

    $('#app_menu').append('<section id="flow_filter"><h4>Filters</h4><ol></ol></section>')
    $('.influx-types a').each(function () {
       $(this).appendTo($('#flow_filter ol'))
    });
    $('#flow_filter a')
        .wrap('<li>')
        .removeClass('app-button app-button-bevel ui-corner-left ui-state-default')
        .find('span')
            .remove();

})();