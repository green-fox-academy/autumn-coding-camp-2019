// let tartalom = $('h1').val();
// console.log(tartalom);
$('button').on('click', (event) => {
  console.log('megnyomtak.');
  $('h1').css('color', 'tomato');
  $('h1').html('hello');
  $('img').fadeOut(1000);
});

