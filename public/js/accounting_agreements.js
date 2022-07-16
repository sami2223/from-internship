jQuery(document).ready(function ($) {
    jQuery.timeago.settings.allowFuture = true;
    $("time.timeago").timeago();

    $("#filterByStatus").selectpicker({iconBase: 'fa'});

    $(document).on("click", ".btnClosePopover", function () {
        $('[data-bs-toggle="type-popover"]').popover('hide');
    });

    // filter by Metric popover
    var TypePopoverList = [].slice.call(document.querySelectorAll('[data-bs-toggle="type-popover"]'))
    var TypePopover = TypePopoverList.map(function (TypePopoverEl) {
        return new bootstrap.Popover(TypePopoverEl, {
            html: true,
            title: 'Filter By Type <a href="#" class="btnClosePopover" data-dismiss="alert">&times;</a>',
            content: function () {
                return document.getElementById('filterByTypeContainer');
            }
        });
    });
    var TypePopoverTrigger = document.getElementById('btnTHTypeFilter');
    TypePopoverTrigger.addEventListener('shown.bs.popover', function () {
        $("#filterByType").selectpicker({iconBase: 'fa'});
    });

    var tblAgreements = jQuery('#tblAgreements').DataTable({
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
            {'bSortable': false, 'aTargets': [0, 5]},
        ],
        "createdRow": function (row, data, index) {
        },
        "footerCallback": function (row, data, start, end, display) {
            var api = this.api(), data;

            // Remove the formatting to get integer data for summation
            var intVal = function (i) {
                var iVal = typeof i === 'string' ?
                        i.replace(/[\$,()]/g, '') * 1 :
                        typeof i === 'number' ?
                        i : 0;

                return !isNaN(iVal) ? iVal : '';
            };

            // Total over all pages
            var total = api
                    .column(3)
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            // Total over this page
            var pageTotal = api
                    .column(3, {page: 'current'})
                    .data()
                    .reduce(function (a, b) {
                        return intVal(a) + intVal(b);
                    }, 0);

            // Update footer
            var pageTot = parseFloat(pageTotal).toFixed(2);
            var overallTotal = parseFloat(total).toFixed(2);
            var totalClass = (pageTot > 0) ? 'totalGreen' : (pageTot < 0) ? "totalRed" : "totalZero";
            var totalBgClass = (pageTot > 0) ? 'totalBgGreen' : (pageTot < 0) ? "totalBgRed" : "totalBgZero";
            jQuery(api.column(3).footer()).html('<span data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Monthly Recurring Revenue">' + pageTot + '</span>');
            jQuery("#tblAgreements .accounting_total_col").addClass(totalBgClass);
            jQuery('[data-toggle="tooltip"]').tooltip();
        },
    });

    tblAgreements.columns().iterator('column', function (ctx, idx) {
        jQuery(tblAgreements.column(idx).header()).append('<span class="sort-icon"/>');
    });

    // show/hide batch action if any of the checkbox is checked
    jQuery(document).on('click', '#tblAgreements .tableColChkDel input[type="checkbox"]', function () {
        if (jQuery('#tblAgreements .tableColChkDel input[type="checkbox"]:checked').length > 0) {
            jQuery("#tblAgreements .table_action_container").removeClass('d-none').slideDown();
        } else {
            jQuery("#tblAgreements .table_action_container").addClass('d-none').slideUp();
        }
    });

    $("#baseProductType").change(function () {
        $(".baseProductField").addClass('d-none');
        switch ($(this).val()) {
            case 'RequiredPackagedHere':
                $(".baseProductRequired").removeClass('d-none');
                break;
            case 'ActiveSeparateAgreementRequired':
                $(".baseProductQualify").removeClass('d-none');
                break;
        }
    });

    $(".btnAddQualifyingProduct").click(function () {
        var tmp = $.now();
        var str = '<div class="mt-2 row baseProductField baseProductQualify tmp_' + tmp + '">';
        str += '<label for="qualifyingProductList_' + tmp + '" class="col-sm-4 col-form-label">Qualifying Product(s)</label>';
        str += '<div class="col-sm-8">';
        str += '<select name="qualifyingProductList[]" id="qualifyingProductList_' + tmp + '" class="form-select">';
        str += '<option value="">-- SKUs show here --</option>';
        str += '</select>';
        str += '<button class="btnRemoveQualifyingProduct" data-toggle="tooltip" title="Remove"><i class="fa fa-close"></i></button>';
        str += '</div>';
        str += '</div>';
        $(".addQualifyingProductContainer").before(str);
        $('[data-toggle="tooltip"]').tooltip();
    });

    $(document).on('click', '.btnRemoveQualifyingProduct', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parents('.baseProductField').remove();
        $('[data-toggle="tooltip"]').tooltip();
    });

    $('[data-toggle="datepicker"]').datepicker();

    $(".btnAddNewMeteredUseAgreement").click(function () {
        $(".addNewMeteredUseAgreementContainer").slideDown();
    });
    $(".btnCloseMeteredUseAgreement").click(function () {
        $(".addNewMeteredUseAgreementContainer").slideUp();
    });
    $(".socialAutoSearch").bootcomplete({
        url: 'ajax/social_search.php',
        minLength: 2
    });
});