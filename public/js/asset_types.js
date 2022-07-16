jQuery(document).ready(function ($) {
    // for file type = zip
    if (jQuery('.asset-type-zip').length > 0) {
        jQuery('.asset-type-zip #asset_tags').tagsinput();
        $('.asset-type-zip #asset_comments').lc_switch();

        $(".assetPrivacyContainer input[type='radio']").click(function () {
            $(".asset-privacy-opt").addClass('d-none');

            switch ($(this).val()) {
                case 'Private':
                    $(".asset-privacy-opt-private").removeClass('d-none');
                    break;
                case 'passwordProtected':
                    $(".asset-privacy-opt-password").removeClass('d-none');
                    break;
                case 'Unlisted':
                    $(".asset-privacy-opt-unlisted").removeClass('d-none');
                    break;
            }
        });
    }
    
    // for file type = video
    if (jQuery('.asset-type-video').length > 0) {
        jQuery('.asset-type-video #asset_tags').tagsinput();
        $('.asset-type-video #asset_comments').lc_switch();

        $(".assetPrivacyContainer input[type='radio']").click(function () {
            $(".asset-privacy-opt").addClass('d-none');

            switch ($(this).val()) {
                case 'Private':
                    $(".asset-privacy-opt-private").removeClass('d-none');
                    break;
                case 'passwordProtected':
                    $(".asset-privacy-opt-password").removeClass('d-none');
                    break;
                case 'Unlisted':
                    $(".asset-privacy-opt-unlisted").removeClass('d-none');
                    break;
            }
        });
    }
    
    // for file type = audio
    if (jQuery('.asset-type-audio').length > 0) {
        jQuery('.asset-type-audio #asset_tags').tagsinput();
        $('.asset-type-audio #asset_comments').lc_switch();

        $(".assetPrivacyContainer input[type='radio']").click(function () {
            $(".asset-privacy-opt").addClass('d-none');

            switch ($(this).val()) {
                case 'Private':
                    $(".asset-privacy-opt-private").removeClass('d-none');
                    break;
                case 'passwordProtected':
                    $(".asset-privacy-opt-password").removeClass('d-none');
                    break;
                case 'Unlisted':
                    $(".asset-privacy-opt-unlisted").removeClass('d-none');
                    break;
            }
        });
    }
    
    // for file type = Image
    if (jQuery('.asset-type-image').length > 0) {
        jQuery('.asset-type-image #asset_tags').tagsinput();
        $('.asset-type-image #asset_comments').lc_switch();

        $(".assetPrivacyContainer input[type='radio']").click(function () {
            $(".asset-privacy-opt").addClass('d-none');

            switch ($(this).val()) {
                case 'Private':
                    $(".asset-privacy-opt-private").removeClass('d-none');
                    break;
                case 'passwordProtected':
                    $(".asset-privacy-opt-password").removeClass('d-none');
                    break;
                case 'Unlisted':
                    $(".asset-privacy-opt-unlisted").removeClass('d-none');
                    break;
            }
        });
    }
    
    // for file type = PDF
    if (jQuery('.asset-type-pdf').length > 0) {
        jQuery('.asset-type-pdf #asset_tags').tagsinput();
        $('.asset-type-pdf #asset_comments, .asset-type-pdf #eSignOverlay').lc_switch();

        $(".assetPrivacyContainer input[type='radio']").click(function () {
            $(".asset-privacy-opt").addClass('d-none');

            switch ($(this).val()) {
                case 'Private':
                    $(".asset-privacy-opt-private").removeClass('d-none');
                    break;
                case 'passwordProtected':
                    $(".asset-privacy-opt-password").removeClass('d-none');
                    break;
                case 'Unlisted':
                    $(".asset-privacy-opt-unlisted").removeClass('d-none');
                    break;
            }
        });
    }
});