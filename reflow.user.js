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

    $('#flow_filter a').click(function() {
        $('#flow_filter a').removeClass('ui-state-active');
        $(this).addClass('ui-state-active');
    });

    $('#flowdock-influx .app-buttonset-right').attr('id', 'actions').appendTo($('#app_menu'));
    $('#actions a').removeClass('ui-corner-all ui-state-default app-button app-button-icon app-button-bevel app-button-toggleable app-button-icon-solo');
    $('#actions span').remove();
    $('#flowdock-influx .app-toolbar').remove();

    $('#main_splitter').prepend('<section id="people"></section>');
    $('#userlist_button').appendTo($('#people'));

    $('.user_icon').each(function() {
        $(this).text($(this).attr('title'));
    });

    $('.app-toolbar').remove();



})();