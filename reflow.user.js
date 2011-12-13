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

    var interval, heightInterval;

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
                $(this).appendTo($('#flow_filter ol'));
            });
            $('#flow_filter a')
                .wrap('<li>')
                .removeClass('app-button app-button-bevel ui-corner-left ui-state-default')
                .find('span').remove();
            filtersMoved = true;
            $('#flow_filter .ui-state-active')
                .removeClass('ui-state-active')
                .parent().addClass('active_item');
        }

        // Move the flow viewing options
        if (!viewsMoved && viewsList.length ===1) {
            viewsList.prepend('<section id="flow_views"><h4>Views</h4><ol></ol></section>');
            $('.app_icon').each(function() {
                $(this).appendTo($('#flow_views ol'));
                $(this).wrap('<li>');
            });
            viewsMoved = true;
            $('#flow_views .current')
                .removeClass('current')
                .parent().addClass('active_item');
        }

        // Move the settings, people & help icon
        if(!settingsMoved && actions.length === 1) {
            actions.attr('id', 'actions').appendTo($('#app_menu'));
            $('#actions a').removeClass('ui-corner-all ui-state-default app-button app-button-icon app-button-bevel app-button-toggleable app-button-icon-solo');
            settingsMoved = true;
            $('#actions span').remove();
            $('#flowdock-influx .app-toolbar').remove();
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

            // Show selected menu items
            $('#app_menu ol').children().click(function() {
               $(this).closest('ol').children().removeClass('active_item');
               $(this).closest('li').addClass('active_item')
            });

        }

        return false;

    }

    interval = window.setInterval(moveTheDOM, 3000);

    // Annoying but dealing with flow heights
    $(window).resize(function() {
        var top      = $('#people').outerHeight() + $('header').height(),
            contents = $('.app-contents');
        contents.height(contents.height() - top);
        return false;
    });

    // Really annoying and seems really heavy. Checking to make sure all the
    // elements exist before trying to resize the chat div. Also fires on window
    // resize, which happens automatically every few seconds. Annoying!
    $(window).resize(function() {
        function setChatHeight() {
            var chat     = $('#chat_app_lines'),
                win      = $(window).height(),
                people   = $('#people').outerHeight(),
                header   = $('header').outerHeight(),
                textarea = $('#chat_app_input_area').outerHeight();
            if (chat.children().length > 0) {
                if (header && people && textarea) {
                    chat.height(win - (header + people + textarea))
                    clearInterval(heightInterval);
                }
            }
            return false;
        }
        heightInterval = window.setInterval(setChatHeight, 2000);
    });

});