jQuery(document).ready(function ($) {

    $("#CD_rave_score_input").slider().on('slide', function (obj) {
        $(".CD_Rave_score").text(obj.value);
    });

    $(".btnAddNewSequence").click(function () {
        $(".sequenceRow").toggleClass('d-none');
        $(this).toggleClass('active');
    });
    $(".btnAddNewTask").click(function () {
        $(".taskRow").toggleClass('d-none');
        $(this).toggleClass('active');
    });
    $(".btnAddNewEvent").click(function () {
        $(".calendarRow").toggleClass('d-none');
        $(this).toggleClass('active');
    });
    $(".btnAddMoney").click(function () {
        $(".financeRow").toggleClass('d-none');
        $(this).toggleClass('active');
    });

    jQuery('#addNewEventCalender').pignoseCalendar({
        minDate: moment(),
        disabledWeekdays: [0], // SUN (0), SAT (6)
        select: onSelectAddNewEvent
    });
    function onSelectAddNewEvent(date, context) {
        jQuery('.selectEventTime').addClass('display-none');
        jQuery('#addEventTime').removeClass('display-none');
    }
});