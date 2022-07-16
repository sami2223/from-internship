jQuery(document).ready(function ($) {
//    var popoverBtn = document.getElementById('btnTHCampaignFilter')
//    var popover = new bootstrap.Popover(popoverBtn, {
//        placement: 'bottom',
//        html: true,
//        content: function () {
//            console.log(document.getElementById('filterByCampaignContainer').innerHTML);
//            return document.getElementById('filterByCampaignContainer').innerHTML;
//        }
//    });

    // filter by campaign popover
    var CampaignPopoverList = [].slice.call(document.querySelectorAll('[data-bs-toggle="campaign-popover"]'))
    var CampaignPopover = CampaignPopoverList.map(function (CampaignPopoverEl) {
        return new bootstrap.Popover(CampaignPopoverEl, {
            html: true,
            title: 'Filter By Campaign <a href="#" class="btnClosePopover" data-dismiss="alert">&times;</a>',
            content: function () {
                return document.getElementById('filterByCampaignContainer');
            }
        });
    });
    var CampaignPopoverTrigger = document.getElementById('btnTHCampaignFilter');
    CampaignPopoverTrigger.addEventListener('shown.bs.popover', function () {
        $("#filterByCampaign").selectpicker();
    });
    $(document).on("click", ".btnClosePopover", function () {
        $('[data-bs-toggle="campaign-popover"]').popover('hide');
        $('[data-bs-toggle="metric-popover"]').popover('hide');
    });


    // filter by Metric popover
    var MetricPopoverList = [].slice.call(document.querySelectorAll('[data-bs-toggle="metric-popover"]'))
    var MetricPopover = MetricPopoverList.map(function (MetricPopoverEl) {
        return new bootstrap.Popover(MetricPopoverEl, {
            html: true,
            title: 'Filter By Metric <a href="#" class="btnClosePopover" data-dismiss="alert">&times;</a>',
            content: function () {
                return document.getElementById('filterByMetricContainer');
            }
        });
    });
    var MetricPopoverTrigger = document.getElementById('btnTHTypeFilter');
    MetricPopoverTrigger.addEventListener('shown.bs.popover', function () {
        $("#filterByMetric").selectpicker({iconBase: 'fa'});
    });

    var tblUrls = jQuery('#tblUrls').DataTable({
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
            "sEmptyTable": "No urls found. <a href='javascript:;' clas='btnAddNewURL'>Click here</a> to add new url.",
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

    tblUrls.columns().iterator('column', function (ctx, idx) {
        jQuery(tblUrls.column(idx).header()).append('<span class="sort-icon"/>');
    });

    // show/hide batch action if any of the checkbox is checked
    jQuery(document).on('click', '#tblUrls .tableColChkDel input[type="checkbox"]', function () {
        if (jQuery('#tblUrls .tableColChkDel input[type="checkbox"]:checked').length > 0) {
            jQuery("#tblUrls .table_action_container").removeClass('d-none').slideDown();
        } else {
            jQuery("#tblUrls .table_action_container").addClass('d-none').slideUp();
        }
    });
});