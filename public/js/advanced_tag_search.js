jQuery(document).ready(function ($) {
    /* Advanced Tag Search */
    $('#ContactsSortByTagModal .modal-body #sortbytag_input').tagsinput({
        maxTags: 1
    });

    // add filter row on sort by tags modal
    $('#ContactsSortByTagModal .btnAddSortbyTagFilerCondition').click(function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        var filterStr = $('#ContactsSortByTagModal .hidden_sortbytag_filter_condition_row').html();
        $('#ContactsSortByTagModal .sortbytag_search_within_row').before(filterStr);
        $('#ContactsSortByTagModal .modal-body .col-lg-12.sortbytag_filter_condition_row .sortbytagSearchTaginput').tagsinput({
            maxTags: 1
        });
        $('[data-toggle="tooltip"]').tooltip();
    });
    // remove filter row on sort by tags modal
    $(document).on('click', '#ContactsSortByTagModal .btnRemoveSortbyTagFilter', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parent('#ContactsSortByTagModal .sortbytag_filter_condition_row').remove();
        $('[data-toggle="tooltip"]').tooltip();
    });
    // show seach within tags modal
    $(document).on('click', '#ContactsSortByTagModal .btnAddSortbyTagSearchCondition', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $('#ContactsSortByTagModal .sortbytag_search_within_row').toggleClass('display-none');
        $('[data-toggle="tooltip"]').tooltip();
    });
    $(document).on('click', '#ContactsSortByTagModal .btnRemoveSearchWithinTag', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $('#ContactsSortByTagModal .sortbytag_search_within_row').toggleClass('display-none');
        $('[data-toggle="tooltip"]').tooltip();
    });

    $("#ContactsSortByTagModal #sortbytag_score_opt").change(function () {
        if ($(this).val() == 'Any') {
            $('#sortbytag_score_input').addClass('d-none')
        } else {
            $('#sortbytag_score_input').removeClass('d-none')
        }
    });

    $("#ContactsSortByTagModal .btnDropResult").click(function () {
        $("#ContactsSortByTagModal").modal('hide');
        $("#sortByTagDropResultModal").modal('show');
    });
});