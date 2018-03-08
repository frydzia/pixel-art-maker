//choose and add color
function addColor(table, colorPicker) {
  //click and add color to cell
  table.find('td').on('click', function() {
    $(this).css('background-color', colorPicker.val());
  });
}

//remove color
function removeColor(table) {
  table.find('td').dblclick(function() {
      $(this).css('background-color', '');
  });
}

function makeGrid(table) {
  // Select size input
  const row = $('#input_height').val();
  const column = $('#input_width').val();

  //create table
  for (let i = 0; i < row; i++) {
    table.append('<tr></tr>');
    for (let j = 0; j < column; j++) {
      table.children().last().append('<td></td>');
    };
  };
}

function removeGrid(table) {
  table.children().remove();
}

 // When size is submitted by the user, call makeGrid()
 $('#sizePicker').submit(function(event) {
   event.preventDefault(); //do not load the default values
   const colorPicker = $('#colorPicker');
   const canvas = $('#pixel_canvas');
   removeGrid(canvas);
   makeGrid(canvas);

   addColor(canvas, colorPicker);
   removeColor(canvas);
 });
