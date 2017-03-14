var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment().format('H:mm:ss'));
  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    var hourSet= $('#hour').val();
    var minSet = $('#min').val();
      var nowHour = moment().format('H');
      // var nowMin = moment().format('mm');
      var result;
      if (moment(hourSet).isSameOrAfter(nowHour)) {
        result = true;
      }
      else {
        result = false;
      }



  $("#result").text(result);
  });

  setInterval(function time() {
    $('#time').text(moment().format('H:mm:ss'));
  } , 1000)

  //every second
  setInterval(function() {
    if(moment().format("H") == $('#hour').val() && moment().format("mm") == $('#min').val())
    {
      $(".test").toggle();
    }
  }, 1000)
});
