jQuery(document).ready(function ($) {
    $('.CD_PrivateTag_Editor input').tagsinput();
    $(".btnEditPrivateTags").click(function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $(".CD_PrivateTag_Container").addClass('d-none');
        $(".CD_PrivateTag_Editor").removeClass('d-none');
        $('[data-toggle="tooltip"]').tooltip();
    });

    // team
    $("time.timeago").timeago();

    $("#chkAll").click(function () {
        if ($(this).is(":checked")) {
            $(".tableColChkDel input[type='checkbox']").prop('checked', true);
        } else {
            $(".tableColChkDel input[type='checkbox']").prop('checked', false);
        }
    });
    var tblContacts = $('#tblContacts').DataTable({
        "infoCallback": function (settings, start, end, max, total, pre) {
            return start + " to " + end + " of " + total;
        },
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "aaSorting": [],
        "processing": true,
//        "serverSide": true,
//        "sAjaxSource": Routing.generate('user_bundle_get_time_clock', {'client': client}),
        "oLanguage": {
            "sEmptyTable": "No contacts found. <a href='javascript:;'>Click here</a> to add new contact.",
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            }
        },
        "aoColumnDefs": [
            {'bSortable': false, 'aTargets': [0, 4]},
        ],
        "createdRow": function (row, data, index) {
        },
    });

    tblContacts.columns().iterator('column', function (ctx, idx) {
        $(tblContacts.column(idx).header()).append('<span class="sort-icon"/>');
    });

    // show/hide batch action if any of the checkbox is checked
    $(document).on('click', '#tblContacts .tableColChkDel input[type="checkbox"]', function () {
        if ($('#tblContacts .tableColChkDel input[type="checkbox"]:checked').length > 0) {
            $("#tblContacts .table_action_container").removeClass('d-none').slideDown();
        } else {
            $("#tblContacts .table_action_container").addClass('d-none').slideUp();
        }
    });

    // if user close chat dock, make the left section full width
    $(".btnCloseChatDock").click(function () {
        $(".contactGroupViewLeftSection").removeClass('col-lg-6').addClass('col-lg-12');
        $(".btnOpenChatDock").removeClass('sectionEnabled');
        jQuery('#chatDockSwitch').prop("checked", false);
    });
    // if user open chat dock, make the left section half width
    $(".btnOpenChatDock").click(function () {
        $(".contactGroupViewLeftSection").addClass('col-lg-6').removeClass('col-lg-12');
        $(".btnOpenChatDock").addClass('sectionEnabled');
    });

    $('#more_container #group_tags').tagsinput();
    $('#more_container #group_comments').lc_switch();

    jQuery('#chatDockSwitch').click(function () {
        if ($(this).is(":checked")) {
            $(".contactGroupViewLeftSection").addClass('col-lg-6').removeClass('col-lg-12');
            $(".btnOpenChatDock").addClass('sectionEnabled');
            $(".SCChatDockNonSocialAssetOnly").removeClass('d-none');
            setChatDockHeight();
        }
    });
});