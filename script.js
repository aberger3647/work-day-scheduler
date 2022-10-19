  var currentDay = moment().format('MMMM Do YYYY');
  var currentHour = moment().format('HH');
  var container = $('.container');
  $('#currentDay').text(currentDay);
// create divs, buttons and hour labels
  for (var i = 9; i <= 17; i++ ) {
    var row = $('<div>');
    row.addClass('row time-block');
    var p = $('<p>');
    p.addClass('hour col-md-1');
    p.attr('id', i);
    p.text(i);
    if (i < 12) {
        p.text(i + " am");
    } else if (i === 12) {
        p.text(12 + " pm");
    } else {
        p.text(i - 12 + " pm");
    }
    var textArea = $('<textarea>');
    textArea.addClass('description col-md-10');
    var button = $('<button>');
    button.addClass('saveBtn btn col-md-1');
    var icon = $('<i>');
    icon.addClass('fas fa-save');
    button.append(icon);
    row.append(p, textArea, button);
    container.append(row);
}
// when button is clicked, run clickHandler function
var button = $('button');
button.on('click', clickHandler);
// take the value input into the textarea and the hour of that textarea and save into localstorage
function clickHandler() {
    var data = $(this).siblings('textarea').val();
    var hour = $(this).siblings('p').attr('id');
    console.log(data);
    localStorage.setItem(hour, data);
}
// set text area div background color to color code based on the hour
$('.time-block').each(function() {
    var timeBlockHour = $(this).children('p').attr('id');
    console.log(typeof timeBlockHour);
    console.log(typeof currentHour);
    currentHour = parseInt(currentHour);
    timeBlockHour = parseInt(timeBlockHour);
    console.log(typeof currentHour);
    if (currentHour > timeBlockHour) {
        $(this).children('textarea').addClass('past');
    } else if (currentHour === timeBlockHour) {
        $(this).children('textarea').addClass('present');
    } else {
        $(this).children('textarea').addClass('future');
    }
})

// load saved info
// function loadLocalStorage() {
//     for (var i = 9; i <= 17; i++ ) {
//     var x = localStorage.getItem(i);
// }

// loadLocalStorage();
