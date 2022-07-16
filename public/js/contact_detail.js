jQuery(document).ready(function ($) {
    jQuery('.CD_PrivateTag_Editor input').tagsinput();
    $(".btnEditPrivateTags").click(function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        $(".CD_PrivateTag_Container").addClass('d-none');
        $(".CD_PrivateTag_Editor").removeClass('d-none');
        jQuery('[data-toggle="tooltip"]').tooltip();
    });

    $("#CD_rave_score_input").slider().on('slide', function (obj) {
        $(".CD_Rave_score").text(obj.value);
    });

    // add new detail
    $(".btnAddNewContactDetail").click(function () {
        var tmp = $.now();
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        $(".CD_Info_AddNew_Row").before('<div class="CD_Info_Row border-bottom p-3 CD_Info_Row_' + tmp + '">' + $(".CD_Info_Add_Row").html() + '</div>');
        jQuery('[data-toggle="tooltip"]').tooltip();
        $('.CD_Info_Row_' + tmp + ' .CDInfoType').selectpicker({
            iconBase: 'fa'
        }).on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
            $('.CD_Info_Row_' + tmp).find('.CD_input_info').attr('placeholder', '');
            $('.CD_Info_Row_' + tmp).find('.CD_input_info').inputmask('remove');

            switch (jQuery(this).val()) {
                case 'MobileNo':
                case 'MainNo':
                case 'PersonalNo':
                case 'BusinessNo':
                case 'iPhoneNo':
                case 'FaxNo':
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').attr('placeholder', '(999) 999-9999');
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').inputmask('(999) 999-9999');
                    break;

                case 'Primarymail':
                case 'WorkMail':
                case 'PersonalMail':
                case 'PayPalMail':
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').attr('placeholder', 'youremail@domain.com');
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').inputmask({alias: "email", placeholder: ''});
                    break;

                case 'HomeAddress':
                case 'MailingAddress':
                case 'BillingAddress':
                case 'WorkAddress':
                case 'OtherAddress':
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').attr('placeholder', 'Address');
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').geocomplete();
                    break;

                case 'Website Personal':
                case 'Website (Work)':
                case 'URL Mapped to SwiftCloud':
                case 'RSS (Follow)':
                case 'Facebook':
                case 'Google':
                case 'Twitter':
                case 'Linkedin':
                case 'GitHub':
                case 'YouTube':
                    $('.CD_Info_Row_' + tmp).find('.CD_input_info').attr('placeholder', 'https://');
                    break;
            }
        });
    });

    // delete detail row
    $(document).on("click", ".CD_Info_Row .CD_Action .btnCDDelete", function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        if (confirm('Do you want to delete this information?')) {
            $(this).parents('.CD_Info_Row').remove();
        }
        jQuery('[data-toggle="tooltip"]').tooltip();
    });

    // if user close chat dock, make the left section full width
    $(".btnCloseChatDock").click(function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        $(".SCChatDockNonSocialAssetOnly").removeClass('d-lg-block');
        $(".switchingSection .btnOpenChatDock").removeClass('sectionEnabled');
        jQuery('[data-toggle="tooltip"]').tooltip();
    });
    // if user open chat dock, make the left section half width
    $(".btnOpenChatDock, .btnCDChatDock").click(function () {
//        $(".contactDetailLeftSection").addClass('col-lg-6').removeClass('col-lg-12');
        $(".switchingSection .btnOpenChatDock").addClass('sectionEnabled');
    });

    $(".CD_UserType input[type='checkbox']").click(function () {
        if($(this).is(":checked")){
            jQuery(".CD_UserType").attr('data-bs-original-title', 'Company').tooltip('update').tooltip('show');
        }else{
            jQuery(".CD_UserType").attr('data-bs-original-title', 'Human').tooltip('update').tooltip('show');
        }
    });
});