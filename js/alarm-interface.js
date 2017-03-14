var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  setInterval(function time() {
    $('#time').text(moment().format('H:mm:ss'));
  } , 1000);
  $('#alarm-set').submit(function(event) {
    event.preventDefault();

    setInterval(function() {
      if(moment().format("H") == $('#hour').val() && moment().format("mm") == $('#min').val())
      {
        $(".test").toggle();
      }
    }, 1000)
  });
});
