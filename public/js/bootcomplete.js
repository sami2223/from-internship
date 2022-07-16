/*
 * @name jQuery.bootcomplete
 * @projectDescription Lightweight AJAX autocomplete for Bootstrap 3
 * @author Rick Somers | http://getwebhelp.com/bootcomplete
 * @version 1.0
 * @license MIT License
 *
 */
var retrievedObject = '';
if (localStorage) {
    var retrievedObject = localStorage.getItem('contact_list');
}

(function ($) {

    $.fn.bootcomplete = function (options) {

        var defaults = {
            url: "/search.php",
            method: 'get',
            wrapperClass: "bc-wrapper",
            menuClass: "bc-menu",
            idField: true,
            idFieldName: $(this).attr('name') + "Id",
            minLength: 3,
            dataParams: {},
            formParams: {}
        }

        var settings = $.extend({}, defaults, options);

        $(this).attr('autocomplete', 'off')
        $(this).wrap('<div class="' + settings.wrapperClass + '"></div>')
        if (settings.idField) {
            if ($(this).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
                //use existing id field
            } else {
                //there is no existing id field so create one
                $('<input type="hidden" id="' + settings.idFieldName + '" name="' + settings.idFieldName + '" value="">').insertBefore($(this))
            }
        }
        $('<div class="' + settings.menuClass + ' list-group"></div>').insertAfter($(this))

        $(this).on("keyup", searchQuery);
        $(this).on("focusout", hideThat)

        var xhr;
        var that = $(this);

        function hideThat() {
            if ($('.list-group-item' + ':hover').length) {
                return;
            }
            $(that).next('.' + settings.menuClass).hide();
        }

        function searchQuery() {
            jQuery(this).attr('data-query', $(this).val());
            var arr = [];
            $.each(settings.formParams, function (k, v) {
                arr[k] = $(v).val()
            })
            var dyFormParams = $.extend({}, arr);
            var Data = $.extend({query: $(this).val()}, settings.dataParams, dyFormParams);
            var rowId = '';

            if (!Data.query) {
                $(this).next('.' + settings.menuClass).html('')
                $(this).next('.' + settings.menuClass).hide()
            }

            if (Data.query.length >= settings.minLength) {
                if (xhr && xhr.readyState != 4) {
                    xhr.abort();
                }

                if (retrievedObject) {
                    var searchKey = $(this).val();
                    var list = JSON.parse(retrievedObject);
                    var results = '';
                    var regex = new RegExp(searchKey, "i");

                    $.each(list, function (i, j) {
                        var cName = j.label;
                        var text = cName.toLowerCase();
                        if (text.search(regex) != -1) {
                            if (typeof j.user_img === 'undefined' || j.user_img === '')
                                userAvatar = 'images/avatar.gif';
                            else {
                                userAvatar = j.user_img;
                            }
                            results += '<a href="#" class="list-group-item" data-id="' + j.id + '" data-label="' + j.label + '"><img class="bc-user-avatar" src="' + userAvatar + '" />' + j.label + '</a>'

                            $(that).next('.' + settings.menuClass).html(results)
                            $(that).next('.' + settings.menuClass).children().on("click", selectResult)
                            $(that).next('.' + settings.menuClass).show();
                        }
                    });
                    results += '<a href="#" class="list-group-item" data-id="0" data-label="Create New User"><img class="bc-user-avatar" src="images/avatar.gif" /> Create New User</a>'
                    $(that).next('.' + settings.menuClass).html(results)
                    $(that).next('.' + settings.menuClass).children().on("click", selectResult)
                    $(that).next('.' + settings.menuClass).show();
                } else {
                    xhr = $.ajax({
                        type: settings.method,
                        url: settings.url,
                        data: Data,
                        dataType: "json",
                        success: function (json) {
                            var results = ''
                            $.each(json, function (i, j) {
                                if (typeof j.user_img === 'undefined' || j.user_img === '')
                                    userAvatar = 'images/avatar.gif';
                                else {
                                    userAvatar = j.user_img;
                                }
                                results += '<a href="#" class="list-group-item" data-id="' + j.id + '" data-label="' + j.label + '"><img class="bc-user-avatar" src="' + userAvatar + '" />' + j.label + '</a>'
                            });

                            $(that).next('.' + settings.menuClass).html(results)
                            $(that).next('.' + settings.menuClass).children().on("click", selectResult)
                            $(that).next('.' + settings.menuClass).show();
                        }
                    });
                }
            } else {
                $(that).removeClass('userSelectedInput');
                $(that).parent().find('.selectedUserAvatar').remove();
                jQuery('.btnBootCompleteExitingUser, .sessionSave').addClass('display-none');
                jQuery('.btnBootCompleteAddNewUser').addClass('display-none');

                if(rowId !==  null) {
                    $(that).parent().parent().parent().parent().find('.addNewUserField').addClass('display-none');

                    if($(that).parent().parent().parent().parent().find('input[name="subtaskTeamAddName_' + rowId + '"]')) {
                        $(that).parent().parent().parent().parent().find('input[name="subtaskTeamAddName_' + rowId + '"]').val('');
                    }

                    if($(that).parent().parent().parent().parent().find('input[name="subtaskTeamAddEmailorPhone_' + rowId + '"]')) {
                        $(that).parent().parent().parent().parent().find('input[name="subtaskTeamAddEmailorPhone_' + rowId + '"]').val('');
                    }
                }

                $(that).prev('input[name="' + settings.idFieldName + '"]').val("");
                $(that).prev('input[name="' + settings.idFieldName + '"]').trigger("change");
                $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').val('');
                $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').trigger('change');
            }
        }

        function selectResult() {
            $(that).val($(this).data('label'));
            if (settings.idField) {

//                var userInfoArray      = $(that).attr('id').split('_');
//                var rowId              = userInfoArray[0] == 'eventUserInfo' && userInfoArray.length == 2 ? userInfoArray[1] : null;
//                var subtaskTeamAddName = rowId != null ? 'subtaskTeamAddName_' + rowId : 'subtaskTeamAddName';
                var subtaskTeamAddName = 'subtaskTeamAddName';
                
                // IF id is zero (0), then show add new fields.
                if ($(this).data('id') == 0) {
                    // this is when there is option to add multiple option
                    // use "BC_Multiple_User" class to parent div in html
                    if ($(that).parents('.BC_Multiple_User').length > 0) {
                        $(that).removeClass('userSelectedInput');
                        $(that).parent().find('.selectedUserAvatar').remove();
                        $(that).parents('.BC_Multiple_User').find('.addNewUserField, .btnBootCompleteAddNewUser').removeClass('display-none');
                        $(that).parents('.BC_Multiple_User').find('.btnBootCompleteExitingUser, .sessionSave').addClass('display-none');
                        $(that).prev('input[name="' + settings.idFieldName + '"]').val('');
                        $(that).addClass('invisible_field');
                        $(that).parent().parent().parent().parent().find('input[name="' + subtaskTeamAddName + '"]').val(jQuery(that).attr('data-query'));
                        // $('.addNewUserField').first().find('input').val(jQuery(that).attr('data-query'));
                    } else {
                        $(that).removeClass('userSelectedInput');
                        $(that).parent().find('.selectedUserAvatar').remove();
                        jQuery('.addNewUserField, .btnBootCompleteAddNewUser').removeClass('display-none');
                        jQuery('.btnBootCompleteExitingUser, .sessionSave').addClass('display-none');
                        $(that).prev('input[name="' + settings.idFieldName + '"]').val("");
                        $(that).addClass('invisible_field');
                        $(that).parent().parent().parent().parent().find('input[name="' + subtaskTeamAddName + '"]').val(jQuery(that).attr('data-query'));
                        // $('.addNewUserField').first().find('input').val(jQuery(that).attr('data-query'));
                    }
                    if ($(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
                        $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').val('');
                        $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').trigger('change');
                    } else {
                        $(that).prev('input[name="' + settings.idFieldName + '"]').val('');
                        $(that).prev('input[name="' + settings.idFieldName + '"]').trigger('change');
                    }
                } else {
                    if($('#reviewByUserId').length){
                       $('#reviewByUserId').val($(this).data('id'));
                    }
                    if ($(that).parents('.BC_Multiple_User').length > 0) {
                        $(that).parents('.BC_Multiple_User').find('.addNewUserField, .btnBootCompleteAddNewUser').addClass('display-none');
                        $(that).parents('.BC_Multiple_User').find('.btnBootCompleteExitingUser').removeClass('display-none');
                    } else {
                        jQuery('.addNewUserField, .btnBootCompleteAddNewUser').addClass('display-none');
                        jQuery('.btnBootCompleteExitingUser').removeClass('display-none');
                    }
                    $(that).removeClass('invisible_field');
                    if ($(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').length !== 0) {
                        //use existed id field
                        $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').val($(this).data('id'));
                        $(that).addClass('userSelectedInput');
                        $(that).parent().find('.selectedUserAvatar').remove();
                        $(that).parent().append('<img class="selectedUserAvatar" src="' + $(this).find('.bc-user-avatar').attr('src') + '" alt="' + $(this).data('label') + '" />');
                        // replace avatar
                        if ($(that).parent().find('.addUserAutoSearch ').attr('data-replace-avatar') !== '') {
                            var replace_cls = $(that).parent().find('.addUserAutoSearch ').attr('data-replace-avatar');
                            jQuery('.' + replace_cls).html('<img class="selectedUserAvatarBig" src="' + $(this).find('.bc-user-avatar').attr('src') + '" alt="' + $(this).data('label') + '" />')
                        }

                        //ensure we trigger the onchange so we can do stuff
                        $(that).parent().parent().find('input[name="' + settings.idFieldName + '"]').trigger('change');
                    } else {
                        //use created id field
                        $(that).prev('input[name="' + settings.idFieldName + '"]').val($(this).data('id'));
                        //ensure we trigger the onchange so we can do stuff
                        $(that).prev('input[name="' + settings.idFieldName + '"]').trigger('change');
                    }
                }
            }
            $(that).next('.' + settings.menuClass).hide();
            return false;
        }

        return this;
    };

}(jQuery));
