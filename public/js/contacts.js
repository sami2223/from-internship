jQuery(document).ready(function ($) {
    $("time.timeago").timeago();

    var tblContacts = jQuery('#tblContacts').DataTable({
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
            {'bSortable': false, 'aTargets': [0, 3]},
        ],
        "createdRow": function (row, data, index) {
        },
    });

    tblContacts.columns().iterator('column', function (ctx, idx) {
        jQuery(tblContacts.column(idx).header()).append('<span class="sort-icon"/>');
    });

    // show/hide batch action if any of the checkbox is checked
    jQuery(document).on('click', '#tblContacts .tableColChkDel input[type="checkbox"]', function () {
        if (jQuery('#tblContacts .tableColChkDel input[type="checkbox"]:checked').length > 0) {
            jQuery("#tblContacts .table_action_container").removeClass('d-none').slideDown();
        } else {
            jQuery("#tblContacts .table_action_container").addClass('d-none').slideUp();
        }
    });
});