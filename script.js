//  HTML variable
var currentDay = $("#currentDay");
var saveBtn = $(".saveBtn");
var timeBlock = $(".time-block");
// Display current Day and Time
currentDay = currentDay.text(moment().format("MMMM Do YYYY, h:mm:ss a"));// use moment.js

function controlTime() {
    timeBlock.each(function() {
        var timeId = parseInt(($(this)).attr("id"));
        var hour =  moment().format("H");
        var textarea = $(this).children(".description");
        //   we are using a IF statement (moment)
        if (timeId == hour) {         
            textarea.addClass("present");
        } else if (timeId < hour) {
            textarea.addClass("past");
        } else {
            textarea.addClass("future");
        }
    });
}
// we are using a DOM and add a event (saving),
saveBtn.click(function(event) {
    var div = $(event.target);
    var timeId = parseInt(div.parent().attr("id")); 
    var textDisplay =  div.siblings('.description').val();
    // add a localStorage to save 
    localStorage.setItem(timeId,textDisplay);
});
    function controlToDo()
    {
    timeBlock.each(function()
    {
  var timeId = parseInt(($(this)).attr("id"));
  var timeD = $(this).children('.description');

  if(localStorage.getItem(timeId) === null)
   {
       return;
   } 
  else{
   timeD.val(localStorage.getItem(timeId));
   }
    })
}
controlTime();
controlToDo();

