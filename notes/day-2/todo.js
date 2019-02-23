$('input[type="submit"]').on('click', (event) => {
  event.preventDefault();
  let todoName = $('input[type="text"]').val();
  $('ul').append(`<li>${todoName}</li>`);
});

$('ul').on('click', (event) => {
  $(event.target).css('color', 'red');
});