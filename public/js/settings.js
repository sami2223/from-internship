jQuery(document).ready(function ($) {
    $('[data-toggle="tooltip"]').tooltip();
    $('[data-toggle="selectpicker"]').selectpicker({
        iconBase: 'fa'
    });

    $('[data-toggle="tagsinput"]').tagsinput();
//    $(".bootstrap-tagsinput").sortable({
//        placeholder: "ui-state-highlight",
//        items: "span.tag"
//    });

    $(".btnAddNewUserDetail").click(function () {
        $(".addNewDetailsContainer").removeClass('d-none');
        $(this).closest('.row').addClass('d-none');
    });

    $("#userAccountType").change(function () {
        $(".personal_info_row, .company_info_row").addClass('d-none');

        switch ($(this).val()) {
            case 'Individual':
                $(".personal_info_row").removeClass('d-none');
                break;
            case 'Branch':
                $(".company_info_row, .connect_to_company_row").removeClass('d-none');
                break;
            case 'Company':
                $(".connect_to_company_row").removeClass('d-none');
                break;
        }
    });

    $(document).on('change', '.MappedUrlOptions', function () {
        $(this).parents('.inputbox').find('.MappedUrlSpecificDocRow, .MappedUrlSpecificPageRow').addClass('d-none');

        switch ($(this).val()) {
            case 'specificDoc':
                $(this).parents('.inputbox').find('.MappedUrlSpecificDocRow').removeClass('d-none');
                break;
            case 'Webpage':
                $(this).parents('.inputbox').find('.MappedUrlSpecificPageRow').removeClass('d-none');
                break;
        }
    });

    jQuery(".editable").click(function () {
        jQuery(this).find(".round-edit-icon").find('i').removeClass("fa-close").addClass("fa-pencil");
        jQuery(this).parent().parent().removeClass('block-active');
        jQuery(this).next('.expand-content').slideUp();
        jQuery(this).not(this).removeClass("editing");

        if (jQuery(this).hasClass("editing")) {
            localStorage.removeItem('row-expanded');
            jQuery(this).find(".round-edit-icon").find('i').removeClass("fa-close").addClass("fa-pencil");
            jQuery(this).removeClass("editing");
            jQuery(this).next('.expand-content').slideUp();
            jQuery(this).parent().parent().removeClass('block-active');
        } else {
            localStorage.setItem('row-expanded', $(this).attr('data-id'));
            jQuery(this).find(".round-edit-icon").find('i').removeClass("fa-pencil").addClass("fa-close");
            jQuery(this).addClass("editing");
            jQuery(this).next('.expand-content').slideDown();
            jQuery(this).parent().parent().addClass('block-active');
        }
    });

    // Team - tree view
    $("#btnAddNewUserAdmin").click(function () {
        $("#addNewUserAdminContainer").slideDown();
    });
    $("#btnCancelUserAdmin").click(function () {
        $("#addNewUserAdminContainer").slideUp();
    });
    jQuery(".btnTeamUserInfoActionReportingRole").click(function () {
        jQuery("#addPersonToRoleContainer").slideDown();
    });
    jQuery("#btnCancelAddPersonToRole").click(function () {
        jQuery("#addPersonToRoleContainer").slideUp();
    });
    var treeView = jQuery('#userAdminTree').tree({
        method: 'post',
        animate: true,
        dnd: true,
        lines: true
    });

    // RAVE Score Automation
    $('#rave_score_table').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": 'No RAVE Score Automation added yet. Click <a href="javascript:;" class="btnAddNewRaveScore">here to add one</a> now?'
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [2]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [2]}]
    });

    jQuery(".btnAddNewRaveScore").click(function () {
        jQuery("#AddNewRaveScoreContainer").slideDown();
    });
    jQuery("#btnCancelNewRaveScore").click(function () {
        jQuery("#AddNewRaveScoreContainer").slideUp();
    });
    $("#AddNewRaveScoreContainer #RaveScoreLeadScoreLow").slider().on('slide', function (obj) {
        $("#AddNewRaveScoreContainer .RaveScoreLeadScoreLowSpan").text(obj.value);
    });
    $("#AddNewRaveScoreContainer #RaveScoreLeadScoreHigh").slider().on('slide', function (obj) {
        $("#AddNewRaveScoreContainer .RaveScoreLeadScoreHigh").text(obj.value);
    });

    // Roles
    $('#rolesForBusiness').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": "No Transaction Types or Roles Defined Yet - <a href='javascript:void(0);' class='btnAddNewRolemain'>Click Here</a> to Add Some Now"
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [2]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [2]}]
    });
    jQuery(".btnAddNewRolemain").click(function () {
        jQuery("#addNewRoleContainer").slideDown();
    });
    jQuery("#btnCancelNewRole").click(function () {
        jQuery("#addNewRoleContainer").slideUp();
    });
    jQuery('#Default_Role_Tags, #Default_Asset_Tags, #useradmin_tags').tagsinput();

    // Custom Contact Fields
    $('#tblCustomField').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": "No Custom Fields Defined Yet - <a href='javascript:void(0);' class='btnAddNewCustomField'>Click Here</a> to Add Some Now"
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [2]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [2]}]
    });
    jQuery(".btnAddNewCustomField").click(function () {
        jQuery("#addNewCustomFieldContainer").slideDown();
    });
    jQuery("#btnCancelAddNewCustomField").click(function () {
        jQuery("#addNewCustomFieldContainer").slideUp();
    });
    $("#newCustomFieldOpts").change(function () {
        switch ($(this).val()) {
            case 'dropdown':
                $(".fieldOptionsRow").removeClass('d-none');
                break;
            default:
                $(".fieldOptionsRow").addClass('d-none');
                break;
        }
    });

    // Custom Contact Fields
    $('#tblEventTypes').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": "No Custom Fields Defined Yet - <a href='javascript:void(0);' class='btnAddNewCustomField'>Click Here</a> to Add Some Now"
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [1]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [1]}]
    });
    jQuery(".btnAddNewEventType").click(function () {
        jQuery("#addNewEventTypesContainer").slideDown();
    });
    jQuery("#btnCancelAddNewEventType").click(function () {
        jQuery("#addNewEventTypesContainer").slideUp();
    });

    // Task / Job / Sales Opportunity Type Pipelines
    $('#tblTransactionTypes').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": "No Transaction Types Defined Yet - <a href='javascript:void(0);' class='btnAddNewTransactionType'>Click Here</a> to Add Some Now"
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [3]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [3]}]
    });
    jQuery(".btnAddNewTransactionType").click(function () {
        jQuery("#addNewTransactionTypesContainer").slideDown();
    });
    jQuery("#btnCancelAddNewTransactionTypes").click(function () {
        jQuery("#addNewTransactionTypesContainer").slideUp();
    });
    jQuery('#transactionTypeIcon').iconpicker({
        hideOnSelect: true,
        collision: true,
        placement: 'right'
    });

    //  Custom Asset Types
    $('#tblAssetTypes').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": "No Asset Types Defined Yet - <a href='javascript:void(0);' class='btnAddNewAssetType'>Click Here</a> to Add Some Now"
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [2]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [2]}]
    });
    jQuery(".btnAddNewAssetType").click(function () {
        jQuery("#addNewAssetTypeContainer").slideDown();
    });
    jQuery("#btnCancelAddNewAssetType").click(function () {
        jQuery("#addNewAssetTypeContainer").slideUp();
    });
    jQuery('#customAssetTypeIcon').iconpicker({
        hideOnSelect: true,
        collision: true,
        placement: 'right'
    });

    //   Reviews, Referrals, Reputation
    $('#reviewsOfBusiness').DataTable({
        "dom": '<"toolbar">frtip',
        "responsive": true,
        "searching": false,
        "aaSorting": [],
        "iDisplayLength": 10,
        "processing": true,
        "oLanguage": {
            "sSearch": "",
            "sProcessing": "<i class='fa fa-spinner fa-spin-2x fa-pulse fa-fw'></i> Processing...",
            "oPaginate": {
                "sFirst": "<i class='fa fa-angle-double-left'></i>", // This is the link to the first page
                "sPrevious": "<i class='fa fa-angle-left'></i>", // This is the link to the previous page
                "sNext": "<i class='fa fa-angle-right'></i>", // This is the link to the next page
                "sLast": "<i class='fa fa-angle-double-right'></i>" // This is the link to the last page
            },
            "sEmptyTable": "No Review Locations Defined Yet - <a href='javascript:void(0);' class='btnAddNewAssetType'>Click Here</a> to Add Some Now"
        },
        "aoColumnDefs": [{
                'bSortable': false,
                'aTargets': [1]
            },
            {"sClass": "text-end colAction d-none d-md-table-cell", "aTargets": [1]}]
    });
    jQuery(".btnAddNewReviewLocation").click(function () {
        jQuery("#addNewReviewContainer").slideDown();
    });
    jQuery("#btnCancelAddNewReview").click(function () {
        jQuery("#addNewReviewContainer").slideUp();
    });
    jQuery(".btnAddNewReviewSettings").click(function () {
        jQuery("#addNewReviewSettingsContainer").slideDown();
    });
    jQuery("#btnCancelReviewSettings").click(function () {
        jQuery("#addNewReviewSettingsContainer").slideUp();
    });

    // Branding & Cosmetics
    jQuery('#branding_flag').lc_switch();
    jQuery('body').delegate('#branding_flag', 'lcs-on', function () {
        jQuery('#frmBrandingCompany').show();
    });
    jQuery('body').delegate('#branding_flag', 'lcs-off', function () {
        jQuery('#frmBrandingCompany').hide();
    });

    $("#company_custom_background").change(function () {
        $(".company_background_color_container, .company_background_color_dark_container, .company_background_image_container").addClass('d-none');
        
        switch ($(this).val()) {
            case 'Solid Color':
                $(".company_background_color_container, .company_background_color_dark_container").removeClass('d-none');
                break;
            case 'Image & Color':
                $(".company_background_color_container, .company_background_color_dark_container").removeClass('d-none');
                $(".company_background_image_container").removeClass('d-none');
                break;
            case 'Tiled Image':
                $(".company_background_image_container").removeClass('d-none');
                break;
        }
    });
});