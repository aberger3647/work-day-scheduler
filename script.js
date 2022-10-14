  var currentDay = moment().format('MMMM Do YYYY');
  var currentHour = moment().format('HH');
  var container = $('.container')
  $('#currentDay').text(currentDay);

  for( var i = 9; i <= 17; i++ ){
    var row = $('<div>');
    row.addClass('row time-block');
    var p = $('<p>');
    p.addClass('hour col-md-1');
    p.attr('id', i);
    p.text(i + " am");
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

var button = $('button');
button.on('click', clickHandler);

function clickHandler() {
    var data = $(this).siblings('textarea').val();
    var hour = $(this).siblings('p').attr('id');
    console.log(data);
    localStorage.setItem(hour, data);
}

$('.time-block').each(function() {
    var timeBlockHour = $(this).children('p').attr('id');
    if (currentHour > timeBlockHour) {
        $(this).children('textarea').addClass('past');
    } else if (currentHour === timeBlockHour) {
        $(this).children('textarea').addClass('present');
    } else {
        $(this).children('textarea').addClass('future');
    }
})

// use moment to make it 12 hour time
// use if statement for am pm
// use if statement for 09 
// use getItem to save task