jQuery(document).ready(function ($) {
    $("#paymentInstallment").change(function () {
        $(".paymentInstallmentOpt").addClass('d-none');
        if ($(this).val() == 'OneTimePayment') {
            $(".OneTimePayment").removeClass('d-none');
        } else {
            $(".splitPayment").removeClass('d-none');
        }
    });

    jQuery('.btnAaddNewProductFeed').click(function () {
        var tmp = jQuery.now();
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        var clone_sec = jQuery('#hiddenProductType').html();
        jQuery('.itemBoxContainer').append('<div class="itemBox"><button class="btnDeleteItemFeed" type="button" data-toggle="tooltip" title="Delete"><i class="fa fa-close"></i></button><div class="mb-3 row product_price_' + tmp + '">' + clone_sec + '</div></div>');
//        jQuery('.product_price_' + tmp).find('.sc_switch').lc_switch();
        jQuery('[data-toggle="tooltip"]').tooltip();
    });

    $(document).on('click', '.btnDeleteItemFeed', function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parent('.itemBox').remove();
        jQuery('[data-toggle="tooltip"]').tooltip();
    });

    $(".productOptChoice input[type='radio']").click(function () {
        if ($(this).val() == 'image') {
            $(".productImgOpt").removeClass('d-none');
            $(".productVideoOpt, .productGalleryOpt").addClass('d-none');
        } else if ($(this).val() == 'video') {
            $(".productVideoOpt").removeClass('d-none');
            $(".productImgOpt, .productGalleryOpt").addClass('d-none');
        } else if ($(this).val() == 'gallery') {
            $(".productGalleryOpt").removeClass('d-none');
            $(".productImgOpt, .productVideoOpt").addClass('d-none');
        }
    });

    jQuery('#skuTemplate #product_tags').tagsinput();
    $('#skuTemplate #isVisibleStore, #skuTemplate #isVisibleMarketplace, #skuTemplate #isTrackInventory').lc_switch();

    $(".paymentTypeSelect").change(function () {
        $(".productDetailsContainer, .switchingSection a.btn, #for_them_panel").removeClass('d-none');
        $(".schedulerContainer, .calendarContainer, .assetsContainer, .playbookContainer").addClass('d-none');
        $("#paymentInstallment").html('<option value="OneTimePayment" selected="selected">One Time Payment</option><option value="splitPayment">Split into Payments</option>');

        switch ($(this).val()) {
            case 'Event Ticket (All at 1 Time)':
            case 'Access Ticket (Small Group or Individual)':
                $("#paymentInstallment").html('<option value="OneTimePayment" selected="selected">One Time Payment</option>');
                $(".productDetailsContainer, a[data-sec-id='for_them_panel'], #for_them_panel").addClass('d-none');
                $(".calendarContainer").removeClass('d-none');
                break;

            case 'Lease / Rental (Per Scheduler + Custom Asset)':
            case 'Hourly Service or Rental (Per Scheduler + Custom Asset)':
                $(".productDetailsContainer, a[data-sec-id='for_them_panel'], #for_them_panel").addClass('d-none');
                $(".schedulerContainer, .assetsContainer").removeClass('d-none');
                break;

            case 'Pre-Priced Packaged Services':
                $(".productDetailsContainer, a[data-sec-id='for_them_panel'], #for_them_panel").addClass('d-none');
                $(".playbookContainer").removeClass('d-none');
                break;
        }
    });

    $(".btnAddNewGalleryItem").click(function () {
        $(this).before('<div class="productGalleryBlock"><img src="images/shopping_cart.png" ><a href="#" title="Upload Image" data-toggle="tooltip"><i class="fa fa-pencil"></i></a></div>');
    });

    // data handling
    $(document).on('change', '.FY_automationOption', function () {
        $(this).parents('.blueOutlineBox').find('.forYouOptionField').addClass('d-none');
        $(this).parents('.blueOutlineBox').find('.FY_' + $(this).val()).removeClass('d-none');
    });
    $('.btnAddNewFYOption').click(function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        var tmp = $.now();
        var str = '<div class="blueOutlineBox">';
        str += '<button class="btnRemoveFYOption" data-toggle="tooltip" title="Remove"><i class="fa fa-close"></i></button>';
        str += '<div class="row">';
        str += '<div class="col-lg-12">';
        str += '<select name="automationOption[]" class="form-select FY_automationOption">';
        str += '<option value="category_msg" disabled="disabled"> == NOTIFY == </option>';
        str += '<option value="emailMe" selected="selected">Email to you (myemail@domain.com)</option>';
        str += '<option value="emailTo">Email To...</option>';
        str += '</select>';
        str += '</div>';
        str += '<div class="col-lg-12 mt-2 forYouOptionField FY_emailTo d-none">';
        str += '<input type="email" name="emailTo[]" placeholder="Enter Email" value="" class="form-control">';
        str += '<div>';
        str += '<div class="emailFormatContainer">';
        str += 'Email Format:';
        str += '<div class="form-check-inline"><input type="radio" name="emailFormat_' + tmp + '" id="emailFormatHTML_' + tmp + '" value="HTML" checked="checked" class="css-checkbox"><label for="emailFormatHTML_' + tmp + '" class="css-radio-label radGroup2">HTML</label></div>';
        str += '<div class="form-check-inline"><input type="radio" name="emailFormat_' + tmp + '" id="emailFormatHTMLFullDetails_' + tmp + '" value="HTMLFullDetails" class="css-checkbox"><label for="emailFormatHTMLFullDetails_' + tmp + '" class="css-radio-label radGroup2">HTML Full Details</label></div>';
        str += '<div class="form-check-inline"><input type="radio" name="emailFormat_' + tmp + '" id="emailFormatPlain_' + tmp + '" value="Plain" class="css-checkbox"><label for="emailFormatPlain_' + tmp + '" class="css-radio-label radGroup2">Plain Text</label></div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        str += '</div>';
        $(".forYouOptionContainer .blueOutlineBox").last().after(str);
        jQuery('[data-toggle="tooltip"]').tooltip();
    });

    $(document).on('click', '.btnRemoveFYOption', function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parent('.blueOutlineBox').remove();
        jQuery('[data-toggle="tooltip"]').tooltip();
    });
    // data handling


    // Installation Options
    $("#installation_container #compressUrl").lc_switch();
    $('body').delegate('#installation_container #compressUrl', 'lcs-statuschange', function () {
        if ($(this).is(':checked')) {
            $("#installation_container .IO_OriginalURL").addClass('d-none');
            $("#installation_container .IO_url_edit").removeClass('d-none');
        } else {
            $("#installation_container .IO_OriginalURL").removeClass('d-none');
            $("#installation_container .IO_url_edit").addClass('d-none');
        }
    });
    $("#installation_container #publicBaseURLSelection").change(function () {
        if ($(this).val() == 'newMappingURL') {
            window.location.href = 'settings.html';
        } else {
            generateEzLinkURL();
        }
    });
    jQuery("#installation_container #link_your_website_hash").inputmask('Regex', {regex: "[a-zA-Z\-_]*"});
    jQuery(document).on('change', '#installation_container #link_your_website_hash', function () {
        var url = jQuery('#installation_container #link_your_website_hash').val();
        if (url.length <= 0) {
            jQuery('#installation_container .emptyWebsiteHashError').slideDown();
        } else {
            jQuery('#installation_container .emptyWebsiteHashError').slideUp();
            generateEzLinkURL();
        }
    });

    function generateEzLinkURL() {
        var publicBaseURL = 'https://' + $("#installation_container #publicBaseURLSelection").val() + '/' + jQuery("#installation_container #link_your_website_hash").val();
        jQuery('#installation_container .IO_New_URL').attr('href', publicBaseURL);
        jQuery('#installation_container #btnIOPreviewCustomURLCopy').val(publicBaseURL);
        jQuery('#installation_container .btnIOPreviewCustomURLText').text(publicBaseURL);
    }

    $("#installation_container .btnIOCopyCustomURL").click(function () {
        var copyTextarea = document.getElementById("btnIOPreviewCustomURLCopy");
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            jQuery("#installation_container .btnIOCopyCustomURL").attr('data-bs-original-title', 'Copied').tooltip('show');
            setTimeout(function () {
                jQuery("#installation_container .btnIOCopyCustomURL").attr('data-bs-original-title', 'Copy').tooltip('show');
            }, 1000);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    $(".btnIOShare").click(function () {
        $(".IOShareContainer").toggleClass('d-none');
    });
    // Installation Options
});