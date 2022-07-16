jQuery(document).ready(function ($) {
    /* filter view */
    $('.btn-DriveFilterView').selectpicker({
        iconBase: 'fa'
    }).on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        if ($(this).val() == 'Create_New_Filtered_View') {
            $(".dataTable .filter_table_action_container").removeClass('d-none');
        }
    });
    $(".filter_tag").tagsinput();

    $("#filterViewForm .inputFeedType").change(function () {
        $("#filterViewForm .columnFilter").addClass('d-none');
        switch ($(this).val()) {
            case 'opt_1':
                $(".filterOpts .columnFilter.opt_1").removeClass('d-none');
                break;
            case 'opt_3':
                $(".filterOpts .columnFilter.opt_3").removeClass('d-none');
                break;
            case 'ScheduledInto':
                $(".filterOpts .columnFilter.ScheduledInto").removeClass('d-none');
                break;
        }
    });

    $(".btnCloseFilteredView").click(function () {
        $(".filter_table_action_container").addClass('d-none');
    });

    /* Advanced Tag Search */
    $('#filterViewForm #FV_sortbytag_input').tagsinput({
        maxTags: 1
    });

    // add filter row on sort by tags modal
    $('#filterViewForm .btnAddSortbyTagFilerCondition').click(function () {
        var tmp = $.now();
        $('[data-toggle="tooltip"]').tooltip('dispose');
        var filterStr = $('#filterViewForm .hidden_FV_sortbytag_filter_condition_row').html();
        $('#filterViewForm .FV_sortbytag_search_within_row').before('<div class="col-lg-12 FV_sortbytag_filter_condition_row_' + tmp + ' FV_sortbytag_filter_condition_row">' + filterStr + '</div>');
        $('#filterViewForm .FV_sortbytag_filter_condition_row_' + tmp + ' .FV_sortbytagSearchTaginput').tagsinput({
            maxTags: 1
        });
        $('[data-toggle="tooltip"]').tooltip();
    });
    // remove filter row on sort by tags modal
    $(document).on('click', '#filterViewForm .btnRemoveSortbyTagFilter', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parent('#filterViewForm .FV_sortbytag_filter_condition_row').remove();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // show seach within tags modal
    $(document).on('click', '#filterViewForm .btnAddSortbyTagSearchCondition', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $('#filterViewForm .FV_sortbytag_search_within_row').toggleClass('display-none');
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).on('click', '#filterViewForm .btnRemoveSearchWithinTag', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $('#filterViewForm .FV_sortbytag_search_within_row').toggleClass('display-none');
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#FV_sortbytag_score_opt").change(function () {
        if ($(this).val() == 'Any') {
            $('#FV_sortbytag_score_input').addClass('d-none')
        } else {
            $('#FV_sortbytag_score_input').removeClass('d-none')
        }
    });
});