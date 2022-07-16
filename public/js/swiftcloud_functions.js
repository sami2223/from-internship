// tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new bootstrap.Popover(popoverTriggerEl, {html: true})
})

jQuery(function ($) {
    // main nav
    $('#left-section nav ul li').on('mouseover', function () {
        var $menuItem = $(this),
                $submenuWrapper = $('> ul', $menuItem);

        var menuItemPos = $menuItem.position();
        // place the submenu in the correct position relevant to the menu item
        $submenuWrapper.css({
            top: menuItemPos.top,
            left: menuItemPos.left + Math.round($menuItem.outerWidth())
        });
    });

    // mobile nav
    $(".mobileToggleLeft").click(function () {
        if (jQuery("#mobileNavLeft").offset().left == 0) {
            jQuery("#mobileNavLeft").css("left", "-1000px");
            jQuery("#mobileNavLeft").removeClass("opened");
            jQuery("body").css("overflow", "inherit");
            jQuery("#mobileNavLeft .overlay").hide();
        } else {
            jQuery("#mobileNavRight").css("right", "-1000px");
            jQuery("#mobileNavRight").removeClass("opened");
            jQuery("#mobileNavLeft").css("left", 0);
            jQuery("#mobileNavLeft").addClass("opened");
            jQuery("body").css("overflow", "hidden");
        }
    });
    $(".mobileToggleRight").click(function () {
        if (jQuery("#mobileNavRight").hasClass("opened")) {
            jQuery("#mobileNavRight").css("right", "-1000px");
            jQuery("#mobileNavRight").removeClass("opened");
        } else {
            jQuery("#mobileNavLeft").css("left", "-1000px");
            jQuery("#mobileNavLeft").removeClass("opened");
            jQuery("#mobileNavRight").css("right", 0);
            jQuery("#mobileNavRight").addClass("opened");
        }
    });

    // global init
    $('[data-toggle="tooltip"]').tooltip();

    if ($('[data-toggle="tagsinput"]').length > 0) {
        $('[data-toggle="tagsinput"]').tagsinput();
    }
    if ($('[data-toggle="selectpicker"]').length > 0) {
        $('[data-toggle="selectpicker"]').selectpicker({
            iconBase: 'fa'
        });
    }
    if ($('[data-toggle="popover"]').length > 0) {
        $('[data-toggle="popover"]').popover();
    }

    $(".btnThemeMode").click(function () {
        $('body').toggleClass('dark-mode');
        if ($('body').hasClass('dark-mode')) {
            $(this).html('<i class="fa-regular fa-sun"></i> Change to Light Mode');
        } else {
            $(this).html('<i class="fa-regular fa-moon"></i> Change to Dark Mode');
        }
    });

    $(document).on('click', '.menu_icons a', function (e) {
        $(".menu_icons a").addClass('collapsed');
        $(".menu_icons_container div.collapse").removeClass('show');
        $(".bottom_submenu div.collapse").removeClass('show');
    });

    $('.hiddenSelectboxContainer').hover(function () {
        $(this).find('.inlineSelectBox').removeClass('display-none');
        $(this).find('.text-dash-underline').addClass('display-none');
    }, function () {
        $(this).find('.inlineSelectBox').addClass('display-none');
        $(this).find('.text-dash-underline').removeClass('display-none');
    });

    // tag score
    $('.SwiftCloudTableTags').not('.noTagScore').find('li').hover(function () {
        $(this).append("<div class='tagScoreContainer'>Assign Tag Score / Value <div class='input-group'><input type='text' class='form-control tagScoreInput'><button type='button' class='btn btn-success btnSaveTagScore'><i class='fa fa-check'></i></button></div></div>");
    }, function () {
        $('.tagScoreContainer').remove();
    });

    // save tag score - JUST FOR DEMO PURPOSE
    $(document).on('click', '.btnSaveTagScore', function () {
        var tagScore = $.trim($(this).parents('.tagScoreContainer').find('.tagScoreInput').val());
        var tagText = $(this).parents('li').find('a').attr('data-tagname');
        $(this).parents('li').find('a').html(tagText + '<span> (' + tagScore + ')</span>');
    });

    // enable/disable sections
    jQuery(".switchingSection a").click(function () {
        jQuery(".switchingSection a").tooltip('dispose');
        var secId = jQuery(this).attr('data-sec-id');
        jQuery("#" + secId).toggleClass('d-none');
        jQuery(this).toggleClass('sectionEnabled');
        jQuery(".switchingSection a").tooltip();
    });
});