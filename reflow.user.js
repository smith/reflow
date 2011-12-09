// ==UserScript==
// @name        reflow
// @namespace   http://fluidapp.com
// @description What does this do?
// @include     jQuery
// @author      http://iamdanielmarino.com
// ==/UserScript==

$(document).ready(function(){

    $('html').addClass('reflow');
    $('head').append('<link rel="stylesheet" href="//dl.dropbox.com/u/138203/reflow/reflow.user.css">');
    $('body').prepend('<header></header>');

    $('#app_menu').append('<section id="my_flows"><h4>Flows</h4></section>')
    $('#app_menu').append('<section id="flow_filter"><h4>Filters</h4><ol></ol></section>');

    var interval;

    function moveTheDOM() {

        var nav           = $("#navigation"),
            userList      = $('.influx-types a'),
            flowList,

            flowListMoved = false,
            userListMoved = false;

        // Move the flow list
        if (!flowListMoved) {
            nav.click();
            flowList = $("#flow_list");
            if (flowList.length === 1) {
                flowList.appendTo($('#my_flows'));
                nav.click();
                flowListMoved = true;
            }
        }

        // Move the user list
        if (!userListMoved && userList.length > 1) {
            userList.each(function () {
                $(this).appendTo($('#flow_filter ol'))
            });
            $('#flow_filter a')
                .wrap('<li>')
                .removeClass('app-button app-button-bevel ui-corner-left ui-state-default')
                .find('span')
                    .remove();
            userListMoved = true;
        }

        if (userListMoved && flowListMoved) {
            clearInterval(interval);
        }

    }

    interval = window.setInterval(moveTheDOM, 1000);

    // $('.user_icon').removeClass('ui-corner-all');


    // $('#flow_filter a').click(function() {
    //      $('#flow_filter a').removeClass('ui-state-active');
    //      $(this).addClass('ui-state-active');
    // });

    // $('#flowdock-influx .app-buttonset-right').attr('id', 'actions').appendTo($('#app_menu'));
    // $('#actions a').removeClass('ui-corner-all ui-state-default app-button app-button-icon app-button-bevel app-button-toggleable app-button-icon-solo');
    // $('#actions span').remove();
    // $('#flowdock-influx .app-toolbar').remove();

    // $('#main_splitter').prepend('<section id="people"></section>');
    // $('#userlist_button').appendTo($('#people'));

    // $('.user_icon').each(function() {
    //     $(this).text($(this).attr('title'));
    // });

    // $('.app-toolbar').remove();

});