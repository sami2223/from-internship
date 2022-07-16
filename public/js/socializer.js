jQuery(document).ready(function ($) {
    $("#Global_Socializer .socialActionShareWith").selectpicker({
        iconBase: 'fa'
    }).on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        $('#Global_Socializer ul.sharedWithPeople li').css('z-index', 1);// set ohters element to the initial level
        $(this).css('z-index', 5); // set clicked element to a higher level

        switch (jQuery(this).val()) {
            case 'MakeNewOwner':
                $("#Global_Socializer_MakeNewOwner").modal('show');
                $("#Global_Socializer").modal('hide');
                break;
            case 'RemoveAccessDetach':
                $("#Global_Socializer_RemoveAccessDetach").modal('show');
                $("#Global_Socializer").modal('hide');
                break;
        }
    }).on('show.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        $('#Global_Socializer ul.sharedWithPeople li').css('z-index', 1);// set ohters element to the initial level
        $(this).parents('li').css('z-index', 5); // set clicked element to a higher level
    }).on('hide.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        $('#Global_Socializer ul.sharedWithPeople li').css('z-index', 1);// set ohters element to the initial level
    });

    $("#Global_Socializer .socialPermission").selectpicker({
        iconBase: 'fa'
    });

    $("#Global_Socializer .socialAutoSearch").bootcomplete({
        url: 'ajax/social_search.php',
        minLength: 2
    });

    $("#Global_Socializer .btnAddNewPeople").click(function () {
        var tmp = $.now();
        $('[data-toggle="tooltip"]').tooltip('dispose');

        var str = '<li class="d-block addNewSocialUserRow tmp_' + tmp + '"><div class="row g-0 BC_Multiple_User">';
        str += '<div class="col-lg-12">';
        str += '<input type="text" class="form-control socialAutoSearch" placeholder="Name, Phone or Email" />';
        str += '<button class="btnRemovePeopleFromSocial" data-toggle="tooltip" title="Remove"><i class="fa fa-close"></i></button>';
        str += '</div>';
        str += '<div class="col-lg-12 addNewUserField display-none">';
        str += '<div class="row mt-2">';
        str += '<div class="col-lg-4 mb-1 mb-lg-0"><input type="text" class="form-control" placeholder="Name" /></div>';
        str += '<div class="col-lg-4 mb-1 mb-lg-0"><input type="text" class="form-control" placeholder="Phone" /></div>';
        str += '<div class="col-lg-4 mb-1 mb-lg-0"><input type="text" class="form-control" placeholder="Email" /></div>';
        str += '</div>';
        str += '</div>';
        str += '<div class="col-lg-12">';
        str += '<div class="row mt-2">';
        str += '<div class="col-lg-6 mb-1 mb-lg-0"><select class="form-select"><option>List of roles</option></select></div>';
        str += '<div class="col-lg-6 mb-1 mb-lg-0"><select class="socialActionShareWith"><option value="AttachedNotShared" data-icon="fa-chain">Attached, Not Shared</option><option value="SharedReadViewOnly" data-icon="fa-eye">Shared: Read / View Only</option><option value="SharedViewComment" data-icon="fa-comments">Shared: View + Comment</option><option value="SharedCanEdit" data-icon="fa-edit">Shared: Can Edit</option><option disabled="" data-icon="">--------------------------------</option><option value="MakeNewOwner" data-icon="fa-crown">Make New Owner</option></select></div>';
        str += '</div>';
        str += '</div>';
        str += '<div class="col-lg-12 mt-2 optionalMsgContainer d-none"><input type="text" class="form-control" placeholder="Optional Message " /></div>';
        str += '</div></li>';

        $("#Global_Socializer .sharedWithPeople").append(str);

        $("#Global_Socializer .tmp_" + tmp + " .socialAutoSearch").bootcomplete({
            url: 'ajax/social_search.php',
            minLength: 2
        });

        $("#Global_Socializer .tmp_" + tmp + " .socialActionShareWith").selectpicker({
            iconBase: 'fa'
        }).on('show.bs.select', function (e, clickedIndex, isSelected, previousValue) {
            $('#Global_Socializer ul.sharedWithPeople li').css('z-index', 1);// set ohters element to the initial level
            $(this).parents('li').css('z-index', 5); // set clicked element to a higher level
        }).on('hide.bs.select', function (e, clickedIndex, isSelected, previousValue) {
            $('#Global_Socializer ul.sharedWithPeople li').css('z-index', 1);// set ohters element to the initial level
        }).on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
            $("#Global_Socializer .tmp_" + tmp + " .optionalMsgContainer").addClass('d-none');
            switch ($(this).val()) {
                case 'SharedReadViewOnly':
                case 'SharedViewComment':
                case 'SharedCanEdit':
                case 'MakeNewOwner':
                    $("#Global_Socializer .tmp_" + tmp + " .optionalMsgContainer").removeClass('d-none');
                    break;
            }
        });

        $('[data-toggle="tooltip"]').tooltip();
    });

    $(document).on('click', '#Global_Socializer .btnRemovePeopleFromSocial', function () {
        $('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parents('.addNewSocialUserRow').remove();
        $('[data-toggle="tooltip"]').tooltip();
    });

    jQuery('#Global_Socializer .btnCopySocialLink').click(function () {
        var $this = $(this);
        var copyTextarea = document.getElementById("btnCopySocialLinkInput");
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            $this.attr('data-bs-original-title', 'Copied').tooltip('show');
            setTimeout(function () {
                $this.attr('data-bs-original-title', 'Copy').tooltip('show');
            }, 1000);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

});