
var today = moment().format('dddd, MMM DD YYYY');
$("#currentDay").html(today);

$(document).ready(function () {
   
    $(".saveBtn").on("click", function () {
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

 
        localStorage.setItem(time, text);
    })
   
    function timeTracker() {
        
        var currentTime = moment().hour();

        
        $(".time-block").each(function () {
            var eventTime = parseInt($(this).attr("id").split("hour")[1]);

            if (eventTime < currentTime) {
                $(this).removeClass("future");
                $(this).removeClass("present");
                $(this).addClass("past");
            }
            else if (eventTime === currentTime) {
                $(this).removeClass("past");
                $(this).removeClass("future");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");

            }
        })
    }

    
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));
    $("#hour20 .description").val(localStorage.getItem("hour20"));
    $("#hour21 .description").val(localStorage.getItem("hour21"));
    $("#hour22 .description").val(localStorage.getItem("hour22"));
    $("#hour23 .description").val(localStorage.getItem("hour23"));
    $("#hour24 .description").val(localStorage.getItem("hour24"));
    timeTracker();
})