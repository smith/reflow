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
            filtersList   = $('.influx-types a'),
            actions       = $('#flowdock-influx .app-buttonset-right'),
            usersList     = $('#userlist_button'),
            flowList,

            flowListMoved  = false,
            filtersMoved   = false,
            settingsMoved  = false,
            usersListMoved = false;

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

        // Move the filters list
        if (!filtersMoved && filtersList.length > 1) {
            filtersList.each(function () {
                $(this).appendTo($('#flow_filter ol'))
            });
            $('#flow_filter a')
                .wrap('<li>')
                .removeClass('app-button app-button-bevel ui-corner-left ui-state-default')
                .find('span')
                    .remove();
            filtersMoved = true;
        }

        // Move the settings & help icon
        if(!settingsMoved && actions.length === 1) {
            actions.attr('id', 'actions').appendTo($('#app_menu'));
            $('#actions a').removeClass('ui-corner-all ui-state-default app-button app-button-icon app-button-bevel app-button-toggleable app-button-icon-solo');
            $('#actions span').remove();
            $('#flowdock-influx .app-toolbar').remove();
            settingsMoved = true;
        }

        // Move the users
        if (!usersListMoved && usersList.length === 1) {
           $('#main_splitter').prepend('<section id="people"></section>');
            usersList.appendTo($('#people'));
            $('.user_icon').each(function() {
                $(this).text($(this).attr('id'));
            });
            $('.app-toolbar').remove();
            usersListMoved = true;
        }

        if (filtersMoved && flowListMoved && settingsMoved && usersListMoved) {
            clearInterval(interval);
        }

    }

    interval = window.setInterval(moveTheDOM, 1000);

    // Annoying but dealing with flow heights
    $(window).resize(function() {
        var pSize    = $('#people').outerHeight() + $('header').height(),
            contents = $('.app-contents'),
            chat     = $('#chat_app_lines');
        contents.height(contents.height() - pSize);
        chat.height(chat.height() - pSize); // Doesn't always fire correctly...
    })

});