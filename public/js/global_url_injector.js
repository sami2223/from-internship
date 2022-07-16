var url = window.location.href;

jQuery(document).ready(function ($) {
    // Global URL Injector
    jQuery(document).on('change', '#Global_URLInjector .publicBaseURLSelection', function () {
        var selectedOption = $(this).find("option:selected");
        var publicBaseURLDomain = selectedOption.val();
        if ($(this).val() == 'newMappingURL') {
            window.location.href = Routing.generate('user_bundle_user_profile_edit') + "?action=newMappingURL";
        } else {
            var publicBaseURL = 'https://' + publicBaseURLDomain + '/' + jQuery('.GlobalURLHashInput').val();
            jQuery('.btnPreviewLinkYourWebsite').html(publicBaseURLDomain + '/<span class="GlobalURLHash">' + jQuery('.GlobalURLHashInput').val() + '</span>');
            jQuery('#btnGlobalURLCompressedURLPreview, .btnPreviewLinkYourWebsite').attr('href', publicBaseURL);
            jQuery('#GlobalURLCompressedURLCopyLink').val(publicBaseURL);
        }
    });

//    jQuery("#Global_URLInjector .GlobalURLHashInput").inputmask('Regex', {regex: "[a-zA-Z\-_]*"});
    jQuery(document).on('keyup', '#Global_URLInjector .GlobalURLHashInput', function () {
        var publicBaseURLDomain = jQuery('#Global_URLInjector .publicBaseURLSelection').val();
        var publicBaseURL = 'https://' + publicBaseURLDomain + '/' + jQuery('.GlobalURLHashInput').val();
        jQuery('.btnPreviewLinkYourWebsite').html(publicBaseURLDomain + '/<span class="GlobalURLHash">' + jQuery('.GlobalURLHashInput').val() + '</span>');
        jQuery('#btnGlobalURLCompressedURLPreview, .btnPreviewLinkYourWebsite').attr('href', publicBaseURL);
        jQuery('#GlobalURLCompressedURLCopyLink').val(publicBaseURL);
    });

    jQuery("#GU_notify_you").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery(".GU_notifyMeShow").removeClass('display-none');
        } else {
            jQuery(".GU_notifyMeShow").addClass('display-none');
        }
    });

    jQuery("#GU_notify_you_by").change(function () {
        var notifyYouBy = jQuery(this).val();
        jQuery(".GU_notify_you_by_field").addClass('display-none');
        jQuery('#GU_when_to_notify').html('<option value="Goal Return Page Reached">Goal Return Page Reached</option><option value="Clicked">Clicked</option><option value="Not Clicked">Not Clicked</option>');
        switch (notifyYouBy) {
            case 'email_referrer':
                jQuery(".GU_email_referrer_container").removeClass('display-none');
                jQuery('#GU_when_to_notify').html('<option value="Goal Return Page Reached">Goal Return Page Reached</option><option value="Clicked">Clicked</option>');
                break;
            case 'email_to':
                jQuery(".GU_email_to_container").removeClass('display-none');
                break;
            case 'sms_to':
                jQuery(".GU_sms_to_container").removeClass('display-none');
                break;
        }
    });

    jQuery("#Global_URLInjector #adjustContactTagScore").click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery(".adjustTagScoreContainer").removeClass('display-none');
        } else {
            jQuery(".adjustTagScoreContainer").addClass('display-none');
        }
    });
    jQuery('#Global_URLInjector #adjust_tag, #Global_URLInjector #adjust_tag2, #Global_URLInjector #adjust_tag3').tagsinput({
        maxTags: 1
    });
    jQuery('#Global_URLInjector #url_tags').tagsinput();

    jQuery('#Global_URLInjector #btnShowForYouExtraOpts').click(function () {
        jQuery('#Global_URLInjector .extraForYouOpt').toggleClass('display-none');
    });

    jQuery('#Global_URLInjector #URLInj_blue .googlTag').click(function () {
        if (jQuery('#Global_URLInjector #URLInj_blue .googlTag input[type=checkbox]:checked').val() === 'tagContent') {
            jQuery('#Global_URLInjector #URLInj_blue .googlTag .tagOptShow').removeClass('display-none');
        } else {
            jQuery('#Global_URLInjector #URLInj_blue .googlTag .tagOptShow').addClass('display-none');
        }
    });

    jQuery('#Global_URLInjector #URLInj_blue #additionalVarOpt').click(function () {
        if (jQuery('#Global_URLInjector #URLInj_blue #additionalVarOpt').is(':checked')) {
            jQuery('#Global_URLInjector #URLInj_blue .additionalVars .addAdditionalVarsContainer').removeClass('display-none');
        } else {
            jQuery('#Global_URLInjector #URLInj_blue .additionalVars .addAdditionalVarsContainer').addClass('display-none');
        }
        globalURLGenerator();
    });
    jQuery('#Global_URLInjector #URLInj_blue #addNewCampaignVar').click(function () {
        if (jQuery("#Global_URLInjector #URLInj_blue .campaign_custom_vars").length < 5) {
            var tmp = jQuery.now();
            var newVar = '';
            var key = Math.random().toString(36).substring(7);
            newVar += '<div class="row row-cols-lg-auto g-2 align-items-center pt-2 additionalVarsRow">';
            newVar += '<div class="col-12">';
            newVar += '         <input type="checkbox" name="user_variables_active_' + key + '" id="var' + tmp + '" class="css-checkbox mr-sm-2" />';
            newVar += '         <label for="var' + tmp + '" class="css-checkbox-label"></label>';
            newVar += '</div>';
            newVar += '<div class="col-12"><input name="user_variables_name_' + key + '" type="text" class="form-control mr-sm-2 variable_name" placeholder="Variable Name" /></div>';
            newVar += '<div class="col-12">=</div>';
            newVar += '<div class="col-12"><input name="user_variables_value_' + key + '" type="text" class="form-control ml-sm-2 mr-sm-2 variable_value" placeholder="Variable Value" /></div>';
            newVar += '<div class="col-12">';
            newVar += '     <span class="mr-2" data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Optional additional variables you want to track"><i class="fa fa-question-circle"></i></span>';
            newVar += '     <a href="javascript:;" class="btn-delete" data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Delete"><i class="fa fa-trash"></i></a>';
            newVar += '</div>';
            newVar += '</div>';
            jQuery('#Global_URLInjector #URLInj_blue .used_variables_container').append(newVar);

            jQuery('[data-toggle="tooltip"]').tooltip('dispose');
            jQuery('[data-toggle="tooltip"]').tooltip();
        }
    });

    jQuery(document).on('click', '#Global_URLInjector #URLInj_blue .addAdditionalVarsContainer .btn-delete', function () {
        jQuery('.btn-delete').tooltip('dispose');
        jQuery(this).parents('.additionalVarsRow').remove();
        jQuery('.btn-delete').tooltip();
    });

    jQuery('#Global_URLInjector #btnShowExtraOpts').click(function () {
        jQuery('#Global_URLInjector .extraForThemOpt').toggleClass('display-none');
    });

    // Add New Piggyback Form Container
    jQuery('#Global_URLInjector .piggybackCheck #piggybackOpt').click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery('#Global_URLInjector #addNewPiggybackFormContainer').slideDown();
        } else {
            jQuery('#Global_URLInjector #addNewPiggybackFormContainer').slideUp();
        }
    });
    // hide Add New Piggyback Form Container
    jQuery("#Global_URLInjector #addNewPiggybackFormContainer .btnClose, #Global_URLInjector #addNewPiggybackFormContainer #btnCancel").click(function () {
        jQuery('#Global_URLInjector [data-toggle="tooltip"]').tooltip('dispose');
        jQuery('#Global_URLInjector .piggybackCheck #piggybackOpt').prop('checked', false)
        jQuery("#Global_URLInjector #addNewPiggybackFormContainer").slideUp();
        jQuery("#Global_URLInjector .addNewCTAForm").addClass('display-none');
        jQuery('#Global_URLInjector [data-toggle="tooltip"]').tooltip();
    });

    jQuery('#Global_URLInjector .chatBotCheck #addChatbackOpt').click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery('#Global_URLInjector .chatbotOptsShow').slideDown();
        } else {
            jQuery('#Global_URLInjector .chatbotOptsShow').slideUp();
        }
    });

    jQuery('#btnGlobalURLCompressedURLCopyLink').click(function () {
        var copyTextarea = document.getElementById("GlobalURLCompressedURLCopyLink");
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            jQuery("#btnGlobalURLCompressedURLCopyLink").attr('data-bs-original-title', 'Copied').tooltip('show');
            setTimeout(function () {
                jQuery("#btnGlobalURLCompressedURLCopyLink").attr('data-bs-original-title', 'Copy').tooltip('show');
            }, 1000);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });
    jQuery('#btnGlobalURLSuperLongURLCopyLink').click(function () {
        var copyTextarea = document.getElementById("GlobalURLSuperLongURLCopyLink");
        copyTextarea.focus();
        copyTextarea.select();

        try {
            var successful = document.execCommand('copy');
            jQuery("#btnGlobalURLSuperLongURLCopyLink").attr('data-bs-original-title', 'Copied').tooltip('update').tooltip('show');
            setTimeout(function () {
                jQuery("#btnGlobalURLSuperLongURLCopyLink").attr('data-bs-original-title', 'Copy').tooltip('update');
            }, 1000);
        } catch (err) {
            console.log('Oops, unable to copy');
        }
    });

    jQuery('#Global_URLInjector .initialData #urlVerStickyOpt').click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery('#Global_URLInjector .initialData .urlVerStickyOptShow').slideDown();
        } else {
            jQuery('#Global_URLInjector .initialData .urlVerStickyOptShow').slideUp();
        }
    });

    // enable/disable macro tracking
    jQuery('#Global_URLInjector #enableMacroTracking').click(function () {
        if (jQuery(this).is(":checked")) {
            jQuery('#Global_URLInjector .macro_tracking_container').removeClass('d-none');
        } else {
            jQuery('#Global_URLInjector .macro_tracking_container').addClass('d-none');
        }
        globalURLGenerator();
    });

    var utm_term = jQuery('#URLInj_beige #utm_term').val();
    var utm_medium = jQuery('#URLInj_beige #utm_medium').val();
    jQuery('#URLInj_beige #utm_source').change(function () {
        jQuery('#URLInj_beige .campaignContentImg, #URLInj_beige .post_to_container, #URLInj_beige #socialOnlyContainer, #URLInj_beige .emailOnlyOption, #URLInj_beige .SEOURLContainer, #URLInj_beige .contactToolContainer, #URLInj_beige .email_subject_row, #URLInj_beige .videoUploader, #URLInj_beige .Post_to_YouTube_Row, #URLInj_beige .Post_to_YouTube, #URLInj_beige .press_release_row, #URLInj_beige .group_audience_row, #URLInj_beige .direct_mail_row').addClass('d-none');
        jQuery('#URLInj_beige .trafficSourceOpt, #URLInj_beige .AdContentContainer, #URLInj_beige .campaignContentCol, #URLInj_beige .imageUploader, #URLInj_beige .ContentCreativeAdRow').removeClass('d-none');
        jQuery('#URLInj_beige .ContentAdLabel').text('Content / Creative / Ad');
        jQuery('#URLInj_beige .trafficSourceLabel').text('Traffic Source');
        jQuery('#URLInj_beige .campaignContentCol').removeClass('col-sm-10').addClass('col-sm-5');
        jQuery('#URLInj_beige .campaignContentImg a').removeClass('video-size');
        jQuery('#URLInj_beige #utm_term').val(utm_term);
        jQuery('#URLInj_beige #utm_medium').val(utm_medium);
        jQuery('#URLInj_beige .campaignContentImg div').attr("title", "Upload your image. Recommended: 1024x1024").tooltip("_fixTitle");
        jQuery('#URLInj_beige #AdContent').val('');

        switch (jQuery(this).val()) {
            case 'retargeting':
                jQuery('#URLInj_beige .campaignContentImg').removeClass('d-none');
                jQuery('#URLInj_beige #utm_term').val('trustbuilder');
                jQuery('#URLInj_beige #utm_medium').val('Remarketing');
                jQuery('#URLInj_beige .campaignContentCol, #URLInj_beige .ContentCreativeAdRow').addClass('d-none');
                break;
            case 'cpm':
                jQuery('#URLInj_beige .campaignContentImg').removeClass('d-none');
                jQuery('#URLInj_beige #utm_term').val('AdSummaryHere');
                jQuery('#URLInj_beige #utm_medium').val('Google_DisplayNetwork');
                jQuery('#URLInj_beige .campaignContentCol, #URLInj_beige .ContentCreativeAdRow').addClass('d-none');
                break;
            case 'social_unpaid':
                jQuery('#URLInj_beige .campaignContentImg, #URLInj_beige .post_to_container, #URLInj_beige #socialOnlyContainer').removeClass('d-none');
                jQuery('#URLInj_beige .ContentAdLabel').text('Post Text');
                jQuery('#URLInj_beige #utm_term').val('AdSummaryHere');
                jQuery('#URLInj_beige #utm_medium').val('{swift_trafficsource}');
                jQuery('#URLInj_beige #AdContent').val('<p>Your post should go here.</p><p>Don\'t know what to write? See <br>SwiftCRM.com/support/socialcontent</p><p>TIP: Keep the shortcode below to include your marketing tracking URL.</p><p>[swift_url name="CTA"]</p>');
                break;
            case 'social_paid':
                jQuery('#URLInj_beige .campaignContentImg, #URLInj_beige .post_to_container, #URLInj_beige #socialOnlyContainer').removeClass('d-none');
                jQuery('#URLInj_beige #URLInj_beige .ContentAdLabel').text('Post Text');
                jQuery('#URLInj_beige #utm_term').val('AdSummaryHere');
                jQuery('#URLInj_beige #utm_medium').val('{swift_trafficsource}');
                jQuery('#URLInj_beige #AdContent').val('<p>Your message should go here.</p><p>Don\'t know what to write? See <br>SwiftCRM.com/support/marketingcontent</p><p>TIP: Keep the shortcode below to include your marketing tracking URL.</p><p>[swift_url name="CTA"]</p>');
                break;
            case 'viral':
                jQuery('#URLInj_beige .campaignContentImg').removeClass('d-none');
                jQuery('#URLInj_beige #utm_term').val('AdSummaryHere');
                jQuery('#URLInj_beige #utm_medium').val('viral');
                break;
            case 'print':
                jQuery('#URLInj_beige .campaignContentImg').removeClass('d-none');
                break;
            case 'email':
                jQuery('#URLInj_beige #socialOnlyContainer, #URLInj_beige .emailOnlyOption, #URLInj_beige .contactToolContainer, #URLInj_beige .email_subject_row').removeClass('d-none');
                jQuery('#URLInj_beige .campaignContentImg, #URLInj_beige .trafficSourceOpt').addClass('d-none');
                jQuery('#URLInj_beige .trafficSourceLabel').text('Audience / Group');
                jQuery('#URLInj_beige .campaignContentCol').removeClass('col-sm-5').addClass('col-sm-10');
                jQuery('#URLInj_beige #utm_medium').val('Email');
                jQuery('#URLInj_beige #utm_term').val('Newsletter');
                jQuery('#URLInj_beige #AdContent').val('<p>Your message should go here.</p><p>Don\'t know what to write? See <br>SwiftCRM.com/support/marketingcontent</p><p>TIP: Keep the shortcode below to include your marketing tracking URL.</p><p>[swift_url name="CTA"]</p>');
                break;
            case 'content':
                jQuery('#URLInj_beige #utm_term').val('trustbuilder');
                jQuery('#URLInj_beige #utm_medium').val('content_marketing');
                jQuery('#URLInj_beige .ContentAdLabel').text('URL');
                jQuery('#URLInj_beige .SEOURLContainer').removeClass('d-none');
                jQuery('#URLInj_beige .AdContentContainer').addClass('d-none');
                break;
            case 'cpc':
                jQuery('#URLInj_beige #utm_term').val('KeyWord');
                jQuery('#URLInj_beige #utm_medium').val('Google');
                break;
            case 'cpa':
                jQuery('#URLInj_beige #utm_term').val('Referring Affiliate Name Here');
                jQuery('#URLInj_beige #utm_medium').val('referral_paid');
                jQuery('#URLInj_beige .group_audience_row').removeClass('d-none');
                break;
            case 'pr':
                jQuery('#URLInj_beige #utm_term').val('AdSummaryHere');
                jQuery('#URLInj_beige #utm_medium').val('press_PR');
                jQuery('#URLInj_beige .press_release_row').removeClass('d-none');
                break;
            case 'direct_mail':
                jQuery('#URLInj_beige .direct_mail_row').removeClass('d-none');
                break;
            case 'seo':
                jQuery('#URLInj_beige #utm_term').val('Exact Phrase they searched for');
                jQuery('#URLInj_beige #utm_medium').val('seo');
                jQuery('#URLInj_beige .ContentAdLabel').text('URL');
                jQuery('#URLInj_beige .SEOURLContainer').removeClass('d-none');
                jQuery('#URLInj_beige .AdContentContainer').addClass('d-none');
                break;
            case 'referral':
                jQuery('#URLInj_beige #utm_term').val('KeyWord we should change to Referring Affiliate Name Here');
                jQuery('#URLInj_beige #utm_medium').val('referral');
                break;
            case 'video_online':
                jQuery('#URLInj_beige .campaignContentImg, #URLInj_beige .post_to_container, #URLInj_beige .videoUploader, #URLInj_beige .Post_to_YouTube_Row').removeClass('d-none');
                jQuery('#URLInj_beige .Post_to_YouTube, #URLInj_beige .Post_to_YouTube_Row').removeClass('d-none');
                jQuery('#URLInj_beige .campaignContentCol, #URLInj_beige .imageUploader, #URLInj_beige .ContentCreativeAdRow').addClass('d-none');
                jQuery('#URLInj_beige .campaignContentImg .videoUploader a').addClass('video-size');
                jQuery('#URLInj_beige .campaignContentImg div').attr("title", "Upload your video.").tooltip("_fixTitle");
                break;
        }
    });

    $(document).on('keyup', "#URLInj_anyurl, #Global_URLInjector .additionalVars .variable_name, #Global_URLInjector .additionalVars .variable_value, #Global_URLInjector #utm_term", function () {
        globalURLGenerator();
    });
    $(document).on('click', "#Global_URLInjector .used_variables_container input[type='checkbox'], #Global_URLInjector #enableMacroTracking", function () {
        globalURLGenerator();
    });
    $(document).on('change', "#Global_URLInjector #utm_source", function () {
        globalURLGenerator();
    });

    var qrcode = new QRCode("shareurl_qrcode", {
        width: 100,
        height: 100,
    });
    jQuery("#Global_URLInjector .btnGlobalURLQRCode").click(function () {
        qrcode.clear();
        var url = jQuery('#Global_URLInjector #GlobalURLCompressedURLCopyLink').val();
        qrcode.makeCode(url);
        jQuery("#Global_URLInjector .rowQRCode").toggle();
    });

    $("#Global_URLInjector .userWillGo").change(function () {
        $("#URLInj_pinkBox .userWillGoText").text($(this).find("option:selected").text());
        $("#URLInj_pinkBox .userWillGoOpts").addClass('display-none');
        switch ($(this).val()) {
            case 'splitTested50':
                $("#URLInj_pinkBox .inAllCaseBox, #URLInj_pinkBox .splitTested50").removeClass('display-none');
                break;
            case 'splitTested33':
                $("#URLInj_pinkBox .inAllCaseBox, #URLInj_pinkBox .splitTested33").removeClass('display-none');
                break;
            case 'RAVEScore':
                $("#URLInj_pinkBox .raveScoreBox").removeClass('display-none');
                break;
            case 'TagScore':
                $("#URLInj_pinkBox .tagScoreBox").removeClass('display-none');
                $('#URLInj_pinkBox .tagScoreBox .pinkBoxBorder').eq(0).find('.tagScoreInput').tagsinput({
                    maxTags: 1
                });
                break;
            case 'Agenda':
                $("#URLInj_pinkBox .agendaBox").removeClass('display-none');
                break;
            case 'PayWall':
                $("#URLInj_pinkBox .paywallBox").removeClass('display-none');
                break;
            default :
                $("#URLInj_pinkBox .inAllCaseBox").removeClass('display-none');
                break;
        }
    });

    // ravescore
    $('#Global_URLInjector .btnAddNewPinkRaveScoreBox').click(function () {
        if ($("#URLInj_pinkBox .raveScoreBox .pinkBoxBorder").length <= 3) {
            var pinkBox = $("#URLInj_pinkBox .raveScoreBox .pinkBoxBorder:first-child").html();
            $("#URLInj_pinkBox .raveScoreBox .pinkBoxBorder").last().after('<div class="pinkBoxBorder mb-3">' + pinkBox + '<a href="javascript:;" class="btn-delete btn-round btnDeletePinkBox" data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Remove"><i class="fa fa-close"></i></a></div>');
            jQuery('[data-toggle="tooltip"]').tooltip();
            $("#URLInj_pinkBox .tagScoreNo").inputmask({
                alias: 'decimal',
                allowPlus: false,
                allowMinus: false,
                digits: 0
            });
        }
    });

    // tagscore
    $('#Global_URLInjector .btnAddNewPinkTagScoreBox').click(function () {
        if ($("#URLInj_pinkBox .tagScoreBox .pinkBoxBorder").length <= 3) {
            var tmp = $.now();
            var pinkBox = $("#URLInj_pinkBox .tagScoreBox .pinkBoxBorder:first-child").html();
            $("#URLInj_pinkBox .tagScoreBox .pinkBoxBorder").last().after('<div class="pinkBoxBorder pinkBoxBorder_' + tmp + ' mb-3">' + pinkBox + '<a href="javascript:;" class="btn-delete btn-round btnDeletePinkBox" data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Remove"><i class="fa fa-close"></i></a></div>');
            jQuery('[data-toggle="tooltip"]').tooltip();

            jQuery('#URLInj_pinkBox .pinkBoxBorder_' + tmp + ' .tagsInputContainer').find('.bootstrap-tagsinput').eq(0).remove();   // to remove duplicate taginputs
            jQuery('#URLInj_pinkBox .pinkBoxBorder_' + tmp + ' .tagScoreInput').tagsinput({
                maxTags: 1
            });
            $("#URLInj_pinkBox .tagScoreNo").inputmask({
                alias: 'decimal',
                allowPlus: false,
                allowMinus: false,
                digits: 0
            });
        }
    });

    // agenda
    $('#Global_URLInjector .btnAddNewPinkAgendaBox').click(function () {
        if ($("#URLInj_pinkBox .agendaBox .pinkBoxBorder").length <= 3) {
            var pinkBox = $("#URLInj_pinkBox .agendaBox .pinkBoxBorder:first-child").html();
            $("#URLInj_pinkBox .agendaBox .pinkBoxBorder").last().after('<div class="pinkBoxBorder mb-3">' + pinkBox + '<a href="javascript:;" class="btn-delete btn-round btnDeletePinkBox" data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Remove"><i class="fa fa-close"></i></a></div>');
            jQuery('[data-toggle="tooltip"]').tooltip();
        }
    });

    // paywall
    $('#Global_URLInjector .btnAddNewPinkPaywallBox').click(function () {
        if ($("#URLInj_pinkBox .paywallBox .pinkBoxBorder").length <= 3) {
            var pinkBox = $("#URLInj_pinkBox .paywallBox .pinkBoxBorder:first-child").html();
            $("#URLInj_pinkBox .paywallBox .pinkBoxBorder").last().after('<div class="pinkBoxBorder mb-3">' + pinkBox + '<a href="javascript:;" class="btn-delete btn-round btnDeletePinkBox" data-toggle="tooltip" data-placement="bottom" data-animation="false" title="Remove"><i class="fa fa-close"></i></a></div>');
            jQuery('[data-toggle="tooltip"]').tooltip();
        }
    });
    $(document).on('click', '.btnDeletePinkBox', function () {
        jQuery('[data-toggle="tooltip"]').tooltip('dispose');
        $(this).parent('.pinkBoxBorder').remove();
        jQuery('[data-toggle="tooltip"]').tooltip();
    });

    $(".tagScoreNo").inputmask({
        alias: 'decimal',
        allowMinus: false,
        digits: 0
    });

    $('#Global_URLInjector #nofollow, #Global_URLInjector #noindex').lc_switch();

    function globalURLGenerator() {
        var url = $.trim($("#URLInj_anyurl").val());

        if (url.length > 0) {
            var urlParam = '';

            // if Macro Tracking is enabled
            if ($("#Global_URLInjector #enableMacroTracking").is(":checked")) {
                urlParam += '&cc={RecipientContactID}';
                urlParam += '&utm_source=' + $("#utm_source").val();
                urlParam += '&utm_term=' + $("#utm_term").val();
            }

            // additional vars
            if ($("#Global_URLInjector #additionalVarOpt").is(":checked")) {
                $("#Global_URLInjector .used_variables_container input[type='checkbox']").each(function () {
                    if ($(this).is(':checked')) {
                        var varName = $.trim($(this).parents('.additionalVarsRow').find('.variable_name').val());
                        var varVal = $.trim($(this).parents('.additionalVarsRow').find('.variable_value').val());
                        if (varName !== '') {
                            urlParam += '&' + varName + "=" + varVal;
                        }
                    }
                });
            }

            url = (urlParam != '') ? url + "?" + urlParam : url;

            $("#Global_URLInjector .shortenURLContainer").show();
            $("#Global_URLInjector .globalLongURL").text(url);
            $("#Global_URLInjector #GlobalURLSuperLongURLCopyLink").val(url);
            $("#Global_URLInjector #btnGlobalURLSuperLongURLPreview").attr('href', url);
        } else {
            $("#Global_URLInjector .shortenURLContainer").hide();
            $("#Global_URLInjector .globalLongURL").text('');
        }
    }
});