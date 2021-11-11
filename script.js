// jquery ready function
$( document ).ready(function() {

    // current date using moment//
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // time color function// 
    var timeColor = function () {
        var presentHour = moment().hour()

        $('.time-block').each(function() {
                var timeBlock = parseInt($(this).attr("id"));

                if (timeBlock < presentHour) {
                    $(this).addClass('past');
                    $(this).removeClass('present');
                    $(this).removeClass('future');
                }
                else if (timeBlock === presentHour) {
                    $(this).removeClass('past');
                    $(this).addClass('present');
                    $(this).removeClass('future');
                } else {
                    $(this).removeClass('past');
                    $(this).removeClass('present');
                    $(this).addClass('future');
                }
        });
    }

    // local storage function //
    $('.saveBtn').on('click', function() {
        var timeValue = $(this).parent().attr("id");
        var taskText = $(this).siblings(".description").val();
        localStorage.setItem(timeValue, taskText);    })

    // get items from local storage and load them into time block when page refreshes
    $("#8 .description").val(localStorage.getItem("8"));
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));
    $("#18 .description").val(localStorage.getItem("18"));

    // call time color function
    timeColor();
});

// test
