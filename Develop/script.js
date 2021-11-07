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
        var taskText = $(this).siblings(".description").val();
        var timeValue = $(this).parent().attr("id");
        localStorage.setItem(timeValue, taskText);    })

    // call time color function
    timeColor();
});
