var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#time').text(moment().format('H:mm:ss'));
  $('#alarm-set').submit(function(event) {
    event.preventDefault();
    var alarmSet= $('#alarm').val();
    var result;
    if (moment().isSameOrAfter(alarmSet)) {
      result = true;
    }
    else {
      result = false;
    }
console.log(result);
  $("#result").text(result);
  });
});

//
// $(document).ready(function(){
//   $('#time').text(moment());
//
//     var alarmSet= "2017-03-14";
//     var result;
//     if (moment().isSameOrAfter(alarmSet)) {
//       result = true;
//     }
//     else {
//       result = false;
//     }
//
//   $("#result").text(result);
//   });
