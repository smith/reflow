$(document).ready(function(){

    var css = '.reflow body{background:#e0e5eb!important;color:#1a1a1a!important}.reflow header{background-image:-webkit-linear-gradient(top,#e8e8e8,#c0c0c0);border-bottom:1px solid #989898;height:50px}.reflow #app_menu{background:#e0e5eb;border-top:1px solid #f9f9f9;box-sizing:border-box;box-shadow:none;float:left;min-height:100%;padding:10px;position:static;text-align:left;width:15%;z-index:1}.reflow #app_menu div.app_icon.current{background:none!important}.reflow #main_splitter{border-left:1px solid #b4b4b4;border-top:1px solid #f9f9f9;box-sizing:border-box;float:right;margin:0;min-width:auto;width:85%}.reflow #app{background:#efefef;box-sizing:border-box;float:right;position:static!important;width:30%!important;z-index:1}.reflow #chat{border-left:0;box-shadow:none;box-sizing:border-box;float:left;position:static!important;width:70%!important}.reflow header .user{float:left;margin:10px 0 0 10px}.reflow header .user .user_name{display:inline-block;position:relative;top:-9px}.reflow .common-flow-items{display:inline-block;float:right;margin-right:10px}.reflow .common-flow-items li{display:inline;float:left;margin:0 1px}.reflow .common-flow-items a,.reflow .common-flow-items input{background-image:-webkit-linear-gradient(top,#f3f3f3,#dfdfdf);border:1px solid #ccc;border-radius:5px;color:#444;cursor:pointer;font-size:11px;opacity:.6;padding:3px 7px 4px;position:relative;text-decoration:none;top:5px;-webkit-transition:opacity .2s linear;transition:opacity .2s linear}.reflow .common-flow-items a:hover,.reflow .common-flow-items input:hover{opacity:1}.reflow .common-flow-items li input{top:0}.reflow .common-flow-items li:last-child{margin-left:0;margin-right:0}.reflow #app_menu h4{color:#727577;line-height:1;margin:20px 0 10px;text-transform:uppercase}.reflow #app_menu ol{list-style:none;margin:0;padding:0}.reflow #app_menu li{line-height:20px;margin:0;padding:1px 0 0 0}.reflow #app_menu a{color:#1a1a1a;cursor:pointer;text-decoration:none}.reflow .active_item a,.reflow .active_item a.ui-state-hover{background-image:-webkit-linear-gradient(top,#b9c4d8,#9aa9c8)!important;border:0!important;border-bottom:1px solid #919fbc!important;color:#fff!important;display:inline-block!important;margin:0 -10px!important;padding:2px 10px 0 11px!important;width:100%!important}#app_menu #flow_views{margin-top:-15px}#app_menu div.app_icon{padding:1px 0 0 21px}.reflow #app_menu .app_icon .app_icon_tooltip{position:static;background:0;color:inherit;font-weight:normal;text-shadow:none;padding:0;line-height:inherit;height:auto;border-radius:0;display:inline-block}.reflow #influx_icon,.reflow #app_menu div#influx_icon.app_icon.current{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAACXBIWXMAAAsTAAALEwEAmpwYAAABL0lEQVQoFaWSvy4EURSHr42VWCR6irGPQCJZ8RYahUS8gd5DaLagkmyil9Bq9BK2VSAKHQkiUXB93+y5Mg2R7Em+Of9+58y9s5tyzqmQUhrAA5zAHNwGxtbsDYpe3xyuaL4A1XQJDt0HxtbsqanKkhZJsQ0ChZuwDV9QzNiaPTVqR1YfI6U22TUMy2Zil98FrUZ9SO0K2vVsLOhR8Hh7YHwcvOGl5PbUqO01F/SjuILvwGnkCgtn0VuOWj9enuYpPIJXqI+Kn4ELKMPGszHg1dQ642zaAYWHUMESLAQ3eDFfBHsVqHVmC9J5JO/41+AJvwrdYB3/DKWv1gVHkzwmQJseuZ/nPtEB2N+F+rj4pmUX/GZrNORP84OMZeMumPIK/k0//3GMDzT+dOWb+fL8DVE4i6oeywk6AAAAAElFTkSuQmCC) 0 50% no-repeat!important}.reflow #flowser_icon,.reflow #app_menu div#flowser_icon.app_icon.current{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABW0lEQVQ4EZWSPS8EURSG7yyxBIkoNBq1QmIrH4lCQaneDZVoFSgUeoVqo/QDRCLxG4hKJVGIRKiIgoLCV8J6zuS8k0MmxE2evOeej3fuzJ2s1WolrSzL2oknYQIG4ASO6LlBy5cZuEmNjkMwx8gd+1WoqDeqhkdpsEYNvhE/hb3lN+OgYvKpA47Bmj6gCSMwBHW4AtWmNSillqa8wZqaKkjJ2as9es+u8lLyad2Lr+iwClHJH3jPOVqNtQqJfrD1DvbeZevBk1XUbqpYZnDqux50vKh4wNV2Eo759hZ98biQQaJ7sG9wCTUdkbgbtsFqxrJqUl3jWmiyD7YPO3AW8nZDixqUyqCN4hZ8hgE9Neoz9YaGTXMDJSjOwh5cwDXY/7ECS2C3ZGb2DQqTbwbBqIumXu3zJ6U0Ty6a1PN8bPorxuCnyUzpCX4zwmQhnGTj3wb5sVOaw8Sut+8L7m2AIiemBQIAAAAASUVORK5CYII=) 0 50% no-repeat!important}.reflow #settings_icon,.reflow #app_menu div#settings_icon.app_icon.current{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVQ4EY2TsUoDQRCGd23tJSGll/gYio1lnkDOQskzWUgKG0FJL5jkFcTWJho7O1HBQs/vX3aW4Tg0C1/mv5l/ZjfJXmyaJnStGOOQ/CTXzvE9dvmCBhgYKujloXO0pot5zvXQlflTzh4onMEbrOAYXsAGrHNuRZTntPSlKSGMSH6BNfwX5R2qdwuh9QGvSW32Ie9nspajhHBCwu98zfM4M2vVatcXdinewZMzXaGjM+mkN64ur3rUGx7A7yx9aM0WyR11+O41OUJ7fbcTPHfl0m+oC7OAZ7CTTG1ni9QuXV1e9VT+EtXO8IO+gH04gCnYcMW6DJZgDWAN3vSXlneg3vQdeNiGHdh0yasetszvAlIvzjvoL6rBX2Vp5VSTZ1L6TCiy9IP2s16ilRSLnOuj0xW2vnICS1jEuAe3mZHl2/EXjkIb+FXLWogAAAAASUVORK5CYII=) 0 50% no-repeat!important}.reflow #flow_list .flow_name{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAHCAYAAAABIM1CAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyklEQVQYGXXQzwoBURTH8XMlbFh6ASuNhIWUbJS8hCzY8BxWNvIGLLyJHY2NPITSlIXyJ43vme4VGrc+nXvO/c2dQcIwlDgiUsEKS3hxGZ29HyaUQwHZ6EBkxp5EZGJnXxmdJQi4NWSjb9T6b4040EzfBT4v8Bg2ULKHW+odV/h2VqZqpmh7SerGGJOhnHCET9+l1uFWk9mFZoMOAvo0P+FmaNoYoIUFaqgijxR06Zfo5Tvs0cMac8gBevsDY5zh/rzfGtjMk6rPTF+kjWH086j5DwAAAABJRU5ErkJggg==) 0 50% no-repeat;padding-left:21px}.reflow #flow_list .flow_unread{float:right;height:auto;min-width:auto!important;position:static}.reflow #actions{float:none;position:absolute;bottom:10px}.reflow #actions a{display:inline-block;height:16px;margin:0 5px 0 0!important;opacity:.5;overflow:hidden;text-indent:-5000px;-webkit-transition:opacity .2s linear;transition:opacity .2s linear;width:16px!important}.reflow #actions a:hover{opacity:.85}.reflow #actions [title="Settings"]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABQ0lEQVQ4EY2TsUoDQRCGd23tJSGll/gYio1lnkDOQskzWUgKG0FJL5jkFcTWJho7O1HBQs/vX3aW4Tg0C1/mv5l/ZjfJXmyaJnStGOOQ/CTXzvE9dvmCBhgYKujloXO0pot5zvXQlflTzh4onMEbrOAYXsAGrHNuRZTntPSlKSGMSH6BNfwX5R2qdwuh9QGvSW32Ie9nspajhHBCwu98zfM4M2vVatcXdinewZMzXaGjM+mkN64ur3rUGx7A7yx9aM0WyR11+O41OUJ7fbcTPHfl0m+oC7OAZ7CTTG1ni9QuXV1e9VT+EtXO8IO+gH04gCnYcMW6DJZgDWAN3vSXlneg3vQdeNiGHdh0yasetszvAlIvzjvoL6rBX2Vp5VSTZ1L6TCiy9IP2s16ilRSLnOuj0xW2vnICS1jEuAe3mZHl2/EXjkIb+FXLWogAAAAASUVORK5CYII=) no-repeat!important}.reflow #actions [title="Help"]{background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAABWklEQVQ4EXWSvUpDQRCFc8XWJ5BcbvzBJnYhpvYZLH0AQSwsBEHQlxAhEKKgT2BlbSGaUrDzJ7YW4k8t1+9sdi6b4WbgZHbOOTO72btZWZYNH1mWLcFtREh+EPC+qpgKDTAg5GAAvoAmpxAnLTe/ctrcQXxxTekAW8vTsSFhAEQT6Hhm+mA9BLtgD1wD05TlbVYnoNDRUsOh7WAZ/dJ5BmEAZAF+nPhIfQJG4CAat5xHPcU8Pz2wANJYpxAUZ5PUWIzZknp6c/y0jXH5j3qH3S/4rAVr3YePtgbMihHNfZqXMdyA1TqjBjzVCXCf8UHts16b4Qm9LcRfkH4Frd/BMbir0aSrp2XvQN/cDziKt69L9prqYdCjKYcYO+Mt9SY4dbyaxyA86fQpdyHfQN1uKSdPVxtXJ6iKyaM6x/BdM0ictML8ylmYApsGt79Crf++Hfkr8j3e51hX6R+KY+rHG87+JgAAAABJRU5ErkJggg==) no-repeat!important;display:inline-block;height:16px;overflow:hidden;text-indent:-5000px;width:16px}.reflow #people{background:#e6e6e6;border-bottom:1px solid #b4b4b4;box-sizing:border-box;padding:10px}.reflow #people .user{cursor:default;display:inline-block}.reflow #people .user .user_name{background-image:-webkit-linear-gradient(top,#dae6f9,#c1d4f5)!important;border:1px solid #9cbdee;border-radius:20px;box-shadow:0 0 1px rgba(255,255,255,.5) inset;display:inline-block;font-size:11px;line-height:20px;margin:3px;padding:0 10px}.reflow #people .user.idle .user_name{background-image:-webkit-linear-gradient(top,#efd57e,#ffc100)!important;border:1px solid #daa400;opacity:.5}.reflow #people .user.offline{opacity:.25}.reflow #people .people-manager{display:inline-block;margin-left:5px}.reflow #flowdock-influx .influx_item_wrapper,.reflow #flowdock-flowser .influx_item_wrapper,.reflow #flowdock-chat .influx_item_wrapper{padding-left:0!important}.reflow #flowdock-influx .influx_item .content .title,.reflow #flowdock-influx .item .content .title,.reflow #flowdock-influx .results-line .content .title,.reflow #flowdock-flowser .influx_item .content .title,.reflow #flowdock-flowser .item .content .title,.reflow #flowdock-flowser .results-line .content .title,.reflow #flowdock-chat .influx_item .content .title,.reflow #flowdock-chat .item .content .title,.reflow #flowdock-chat .results-line .content .title{font-size:100%}.reflow #flowdock-chat #chat_app{background:#efefef}.reflow #flowdock-chat #chat_app_input_area{bottom:-1px;left:0;position:absolute;width:70%}.reflow #flowdock-chat #chat_app_lines .chat_app_history_info,.reflow #flowdock-chat #chat_app_lines .chat_line{border:0;box-sizing:border-box;float:none;padding:7px 10px 7px 60px}.reflow #flowdock-chat .chat_line .user_avatar{left:12px;margin:0;position:absolute;top:7px}.reflow #flowdock-chat .chat_line .chat_line_content{background:#fff;border-radius:3px;box-shadow:0 1px 1px rgba(0,0,0,.1);padding:11px 15px;position:relative}.reflow #flowdock-chat .chat_line .chat_line_header{margin:0 0 10px;border-bottom:1px dotted #ccc;border-top:0;overflow:hidden;padding:0 0 10px;font-weight:normal}.reflow #flowdock-chat .chat_line .nick{color:#ccc;float:left;font-weight:normal;padding:0;position:static;text-align:left;width:auto}.reflow #flowdock-chat .chat_line .timestamp{border-radius:0;float:right;font-size:inherit;line-height:inherit;margin:0;padding:0;position:static;color:#ccc}.reflow #flowdock-chat .chat_line .timestamp span.date,.reflow #flowdock-chat .chat_line .timestamp span.tags,.reflow #flowdock-chat .chat_line .timestamp span.tags.tagField-wrapper span,.reflow #flowdock-chat .chat_line .timestamp span.time,.reflow #flowdock-chat .chat_line.hide_header .chat_line_header .nick{display:inherit}.reflow #flowdock-chat .chat_line .chat_line_content:before{border-right:5px solid #fff;border-top:5px solid transparent;border-bottom:5px solid transparent;display:inline-block;height:0;left:-5px;position:absolute;top:14px;width:0;content:""}.reflow #flowdock-chat .chat_line.highlight,.reflow #flowdock-chat .chat_line.highlight .chat_line_header .timestamp,.reflow #flowdock-chat .chat_line.highlight-everyone,.reflow #flowdock-chat .chat_line.highlight-everyone .chat_line_header .timestamp,.reflow #flowdock-chat .chat_line.highlight-user,.reflow #flowdock-chat .chat_line.highlight-user .chat_line_header .timestamp{background:0;border-radius:0;box-shadow:none}.reflow #flowdock-chat .chat_line.highlight .chat_line_content,.reflow #flowdock-chat .chat_line.highlight-everyone .chat_line_content,.reflow #flowdock-chat .chat_line.highlight-user .chat_line_content{border:1px solid rgba(82,168,236,.7);box-shadow:0 1px 1px rgba(0,0,0,.1),0 0 8px rgba(82,168,236,0.7)}.reflow .user_avatar{border:1px solid #fff;border-radius:100%;box-shadow:0 1px 1px rgba(0,0,0,.35),0 1px 3px rgba(0,0,0,.75) inset;display:inline-block;height:30px;margin-right:5px;width:30px}.reflow .ui-state-hover,.reflow .ui-widget-content .ui-state-hover,.reflow .ui-state-focus,.reflow .ui-widget-content .ui-state-focus{background:inherit!important;border:inherit!important;border-radius:none}.reflow #flowdock-chat .chat_line.chat_topline,#flowdock-chat .chat_line.separator,.reflow #flowdock-chat .app-toolbar,.reflow #flowdock-influx .app-toolbar,.reflow #people .user .last_activity,.reflow #flow_list .organization,.reflow #app_menu div.app_icon img,.reflow #app_menu div.app_unread,.reflow .common-flow-items li:first-child,.reflow .vsplitbar,.feedback{display:none!important}';
    var interval, heightInterval, avatarsInterval, userAvatars = {};

    $('head').append('<style>' + css + '</style>');
    //$('head').append('<link rel="stylesheet" href="//dl.dropbox.com/u/138203/reflow/reflow.user.css">');

    function moveTheDOM() {

        var navClick      = $("#navigation"),
            filtersList   = $('.influx-types a'),
            viewsList     = $('#app_menu'),
            actions       = $('#flowdock-influx .app-buttonset-right'),
            usersClick    = $('#userlist_button'),
            flowList,
            usersList,

            prepStuff      = false,
            flowListMoved  = false,
            filtersMoved   = false,
            viewsMoved     = false,
            settingsMoved  = false,
            usersListMoved = false;

        if (!prepStuff) {
            $('html').addClass('reflow');
            $('body').prepend('<header></header>');
            viewsList
                .append('<section id="my_flows"><h4>Flows</h4></section>')
                .append('<section id="flow_filter"><h4>Filters</h4><ol></ol></section>');
            prepStuff = true;
        }

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
        if (!viewsMoved && viewsList.length === 1) {
            viewsList.prepend('<section id="flow_views"><h4>Views</h4><ol></ol></section>');
            $('.app_icon').each(function() {
                $(this).appendTo($('#flow_views ol')).wrap('<li>');
            });
            viewsMoved = true;
            $('#flow_views .current')
                .removeClass('current')
                .parent().addClass('active_item');
        }

        // Move the settings, people & help icon
        if(!settingsMoved && actions.length === 1) {
            actions
                .attr('id', 'actions')
                .appendTo(viewsList)
                .children()
                .removeClass('ui-corner-all ui-state-default app-button app-button-icon app-button-bevel app-button-toggleable app-button-icon-solo');
            settingsMoved = true;
            $('#actions span, #flowdock-influx .app-toolbar').remove();
        }

        // Move the users
        if (!usersListMoved) {
            usersClick.click();
            usersList = $("#dashboard_user_list");
            if (usersList.length === 1) {
                $('#main_splitter').prepend('<section id="people"></section>');
                // Append me
                $('header').append('<div class="user"><div class="user_avatar" style="background-image:' + $('#status-panel .avatar').css('background-image') + ';"></div><div class="user_name">' + $('.user_info').find('.name').text() + '</div></div>');
                userAvatars['user_' + window.userId] = $('#status-panel .avatar').css('background-image');
                // Append everyone else
                $('#dashboard_user_list .user').each(function() {
                    var t = $(this);
                    $('#people').append('<div id="' + t.attr('id').replace('dashboard_', '') + '" class="' + t.attr('class') + '"><div class="user_name">' + t.find('.user_name').text() + '</div><div class="last_activity">' + t.find('.last_activity').text() + '</div></div>');
                    userAvatars[t.attr('id').replace('dashboard_', '')] = t.find('.user_icon').css('background-image');
                });
                // Append people manager
                $('.people-manager')
                    .removeClass('app-button ui-corner-all ui-state-default ui-state-hover')
                    .find('.ui-icon')
                    .remove();
                $('#people').append($('.people-manager'));
                usersClick.click();
                usersListMoved = true;
            }
        }

        if (prepStuff && filtersMoved && flowListMoved && viewsMoved && settingsMoved && usersListMoved) {
            clearInterval(interval);
            // Show selected menu items
            $('#app_menu ol').children().click(function() {
                var t = $(this);
                t.closest('ol').children().removeClass('active_item');
                t.closest('li').addClass('active_item');
            });
        }

        return false;
    }

    interval = window.setInterval(moveTheDOM, 1500);

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
                    chat.height(win - (header + people + textarea));
                    clearInterval(heightInterval);
                }
            }
            return false;
        }
        heightInterval = window.setInterval(setChatHeight, 1500);
    });


    // Set avatars for chat messages
    function setUserAvatars() {
        var chat      = $('#chat_app_lines'),
            curEl,
            userClass;
        if (chat.length > 0) {
            chat.children().not('.separator, .reflowed').each(function() {
                curEl     = $(this);
                userClass = curEl.find('.nick').attr('class').split(' ')[1];
                // for now don't try to show current users avatar (it's undefined)
                if (typeof userAvatars[userClass] !== 'undefined') {
                   curEl.addClass('reflowed').prepend('<span class="user_avatar" style="background-image:' + userAvatars[userClass] + ';"></span>');
                   curEl.find('.chat_line_header').prependTo(curEl.find('.chat_line_content'));
                }
            });
        }
    }
    avatarsInterval = window.setInterval(setUserAvatars, 1500)

});