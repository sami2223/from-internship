jQuery(document).ready(function ($) {
    $("time.timeago").timeago();

    var tblDrive = jQuery('#tblDrive').DataTable({
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

    tblDrive.columns().iterator('column', function (ctx, idx) {
        jQuery(tblDrive.column(idx).header()).append('<span class="sort-icon"/>');
    });

    // show/hide batch action if any of the checkbox is checked
    jQuery(document).on('click', '#tblDrive .tableColChkDel input[type="checkbox"]', function () {
        if (jQuery('#tblDrive .tableColChkDel input[type="checkbox"]:checked').length > 0) {
            jQuery("#tblDrive .table_action_container").removeClass('d-none').slideDown();
        } else {
            jQuery("#tblDrive .table_action_container").addClass('d-none').slideUp();
        }
    });

    $(".btnDriveView .dropdown-item").click(function () {
        $(".btnDriveView .dropdown-item").removeClass('active');
        $(this).addClass('active');
    });

    jQuery('#invoiceTypeOpts').change(function () {
        if (jQuery(this).val() == 'Receipt') {
            jQuery('#invoice_status_opts').html('<option value="Paid" selected="selected">PAID</option><option value="Payment_Pending">Payment Pending</option><option value="Refunded">Refunded</option>');
        } else if (jQuery(this).val() == 'Estimate') {
            jQuery('#invoice_status_opts').html('<option value="Due" selected="selected">Due</option><option value="Paid_Partial">Paid Partial</option><option value="Paid">PAID</option><option value="Payment_Pending">Payment Pending</option><option value="Canceled">Canceled</option><option value="Refunded">Refunded</option><option value="Unpaid_Overdue">Unpaid Overdue</option><option value="Not_Yet_Committed" selected="selected">Not Yet Committed</option><option value="Committed">Committed</option>');
        } else if (jQuery(this).val() == 'Quote') {
            jQuery('#invoice_status_opts').html('<option value="Due" selected="selected">Due</option><option value="Paid_Partial">Paid Partial</option><option value="Paid">PAID</option><option value="Payment_Pending">Payment Pending</option><option value="Canceled">Canceled</option><option value="Refunded">Refunded</option><option value="Unpaid_Overdue">Unpaid Overdue</option><option value="Not_Yet_Committed" selected="selected">Not Yet Committed</option><option value="Committed">Committed</option>');
        } else if (jQuery(this).val() == 'Proposal') {
            jQuery('#invoice_status_opts').html('<option value="Due">Due</option><option value="Paid_Partial">Paid Partial</option><option value="Paid">PAID</option><option value="Payment_Pending">Payment Pending</option><option value="Canceled">Canceled</option><option value="Refunded">Refunded</option><option value="Unpaid_Overdue">Unpaid Overdue</option><option value="Not_Yet_Committed" selected="selected">Not Yet Committed</option><option value="Committed">Committed</option>');
        } else if (jQuery(this).val() == 'Credit_Memo') {
            jQuery('#invoice_status_opts').html('<option value="Due">Due</option><option value="Paid_Partial">Paid Partial</option><option value="Paid" selected="selected">PAID</option><option value="Payment_Pending">Payment Pending</option><option value="Canceled">Canceled</option><option value="Refunded">Refunded</option><option value="Unpaid_Overdue">Unpaid Overdue</option><option value="Not_Yet_Committed">Not Yet Committed</option><option value="Committed">Committed</option>');
        } else {
            jQuery('#invoice_status_opts').html('<option value="Due" selected="selected">Due</option><option value="Paid_Partial">Paid Partial</option><option value="Paid">PAID</option><option value="Payment_Pending">Payment Pending</option><option value="Canceled">Canceled</option><option value="Refunded">Refunded</option><option value="Unpaid_Overdue">Unpaid Overdue</option>');
        }
    });

    $("#newFolderWorkroomModal #sendWithOtherPeople").click(function () {
        if ($(this).is(":checked")) {
            $("#newFolderWorkroomModal .shareWithOtherPeopleContainer").removeClass('d-none');
        } else {
            $("#newFolderWorkroomModal .shareWithOtherPeopleContainer").addClass('d-none');
            $("#newFolderWorkroomModal #sendInvitation").prop('checked', false);
            $("#newFolderWorkroomModal .stepProcess").addClass('d-none');
        }
    });
    jQuery("#newFolderWorkroomModal .btnAddNewPeople").click(function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        var str = '<div class="row mb-3 position-relative">';
        str += '<div class="col-lg-6">';
        str += '<input class="form-control" type="text" name="userEmailName" placeholder="Email or Username" autocomplete="off">';
        str += '</div>';
        str += '<div class="col-lg-6">';
        str += '<select name="userRoleSelect" class="form-select">';
        str += '<option>List of Roles</option>';
        str += '</select>';
        str += '<a href="javascript:;" class="btnRemovePeople" data-toggle="tooltip" title="Remove User"><i class="fa fa-trash-alt"></i></a>';
        str += '</div>';
        str += '</div>';

        $("#newFolderWorkroomModal .btnAddNewPeopleRow").before(str);
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(document).on('click', "#newFolderWorkroomModal .btnRemovePeople", function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).closest('.row').remove();
        $('[data-toggle="tooltip"]').tooltip();
    });
    $("#newFolderWorkroomModal #sendInvitation").click(function () {
        if ($(this).is(":checked")) {
            $("#newFolderWorkroomModal .stepProcess").removeClass('d-none');
        } else {
            $("#newFolderWorkroomModal .stepProcess").addClass('d-none');
        }
    });

    if (jQuery("#add_phone_search").length > 0) {
        jQuery("#add_phone_search").intlTelInput({
            utilsScript: "js/utils.js?1536844998850"
        });
    }
});