jQuery(document).ready(function ($) {
    // open chat dock
    $(".btnOpenChatDock").click(function () {
        $(".SCChatDockNonSocialAssetOnly").removeClass('d-none');
        setChatDockHeight();
    });

    // close chat dock
    $(".btnCloseChatDock").click(function () {
        $(".SCChatDockNonSocialAssetOnly").addClass('d-none');
    });

    // chat dock selector
    $('.ChatDockInputOpt').selectpicker({
        iconBase: 'fa'
    }).on('changed.bs.select', function (e, clickedIndex, isSelected, previousValue) {
        $(".SCChatDockNonSocialAssetOnly .ChatDockFooterContainer").removeClass('d-none');
        $(".SCChatDockNonSocialAssetOnly .ChatDockFooterContainer .ChatDockOpt").addClass('d-none');

        switch ($(this).val()) {
            case 'history':
                $(".SCChatDockNonSocialAssetOnly .ChatDockFooterContainer").addClass('d-none');
                break;
            case 'Private_note':
                $(".SCChatDockNonSocialAssetOnly .ChatDockFooterContainer .ChatDockPrivateNoteOpt").removeClass('d-none');
                break;
            case 'report':
                $(".SCChatDockNonSocialAssetOnly .ChatDockFooterContainer .ChatDockReportOpt").removeClass('d-none');
                break;
        }

        setChatDockHeight();
    });

    setChatDockHeight();
    jQuery(window).resize(function () {
        setChatDockHeight();
    });
    jQuery(".SCChatDockNonSocialAssetOnly .ChatDockHistoryContainer").mCustomScrollbar({
        theme: "dark",
        callbacks: {
            onInit: function () {
                setTimeout(function () {
                    jQuery(".SCChatDockNonSocialAssetOnly .ChatDockHistoryContainer").mCustomScrollbar('scrollTo', 'bottom');
                }, 500);
            }
        }
    });

    // set chat window height
    function setChatDockHeight() {
        setTimeout(function () {
            var chatHeight = jQuery(window).outerHeight() - jQuery('.SCChatDockNonSocialAssetOnly .ChatDockHeader').outerHeight() - jQuery('.SCChatDockNonSocialAssetOnly .ChatDockFooterContainer').outerHeight() - 30;
            jQuery('.SCChatDockNonSocialAssetOnly .ChatDockHistoryContainer').css('height', chatHeight);
        }, 300);
    }

    jQuery('.chatNoteImg').click(function () {
        jQuery('.chatNoteImgFile').trigger('click');
    });

});