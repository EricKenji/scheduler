// jquery ready function
$( document ).ready(function() {

    // current date using moment//
    $('#currentDay').text(moment().format('MMMM Do YYYY, h:mm:ss a'));

    // time color status // 
    var timeColor = function () {
        var presentHour = moment().hour()

        $('.time-block').each(function() {
                var timeBlock = parseInt($(this).attr("id"));
                console.log(presentHour);
                console.log(timeBlock);

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

    timeColor();


});
