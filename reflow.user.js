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

        var navClick      = $("#navigation"),
            filtersList   = $('.influx-types a'),
            viewsList     = $('#app_menu'),
            actions       = $('#flowdock-influx .app-buttonset-right'),
            usersClick    = $('#userlist_button'),
            flowList,
            usersList,

            flowListMoved  = false,
            filtersMoved   = false,
            viewsMoved     = false,
            settingsMoved  = false,
            usersListMoved = false;

        // Move the flow list
        if (!flowListMoved) {
            navClick.click();
            flowList = $("#flow_list");
            if (flowList.length === 1) {
                flowList.appendTo($('#my_flows'));
                $('.common-flow-items').appendTo('header');
                navClick.click();
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

        // Move the flow viewing options
        if (!viewsMoved && viewsList.length ===1) {
            viewsList.prepend('<section id="flow_views"><h4>Views</h4><ol></ol></section>');
            $('.app_icon').each(function() {
                $(this).appendTo($('#flow_views ol'));
                $(this).wrap('<li>')
            });
            viewsMoved = true;
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
        if (!usersListMoved) {
            usersClick.click();
            usersList = $("#dashboard_user_list");
            if (usersList.length === 1) {

                $('#main_splitter').prepend('<section id="people"></section>');

                // Append me
                $('header').append('<div class="user"><div class="me" style="' + $('#status-panel .avatar').attr('style') + '"></div><div class="user_name">' + $('.user_info').find('.name').text() + '</div></div>');

                // Append everyone else
                $('#dashboard_user_list .user').each(function() {
                    $('#people').append('<div class="' + $(this).attr('class') + '"><div class="user_name">' + $(this).find('.user_name').text() + '</div><div class="last_activity">' + $(this).find('.last_activity').text() + '</div></div>');
                });

                // Append people manager
                $('.people-manager')
                    .removeClass('app-button ui-corner-all ui-state-default ui-state-hover')
                    .find('.ui-icon')
                    .remove()
                $('#people').append($('.people-manager'));

                usersClick.click();
                usersListMoved = true;
            }
        }

        if (filtersMoved && flowListMoved && viewsMoved && settingsMoved && usersListMoved) {
            clearInterval(interval);
        }

    }

    interval = window.setInterval(moveTheDOM, 2000);

    // Annoying but dealing with flow heights
    $(window).resize(function() {
        var pSize    = $('#people').outerHeight() + $('header').height(),
            contents = $('.app-contents'),
            chat     = $('#chat_app_lines');
        contents.height(contents.height() - pSize);
        //chat.height(chat.height() - (pSize+70)); // Doesn't always fire correctly...
        console.log(chat.html())
        //chat.css("height", chat.height() + "px !important")
    })

});