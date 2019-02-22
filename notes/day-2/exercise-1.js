$('#fox-1 h1').text('<strong>Macrotis</strong>');
$('#fox-2').css('border-color', 'blue');
$('div').css('background-color', 'yellow');

$('#fox-2').html('<strong>Macrotis</strong>');

$('body').append('<div id="fox-4"><h1>Megalotis</h1></div>');

let cohortName = 'Megalotis';

$('body').append(
  `
  <div id="fox-4">
    <h1>${cohortName}</h1>
  </div>
  `
);

let nevek = ['Gyuri', 'Lajos', 'Pisti'];
nevek.forEach((elem, index) => {
  console.log(elem);
  $('body').append(
    `
    <div>
      <h1>${elem}</h1>
    </div>
    `
  );
});


$('#main').on('click', (event) => {
  console.log(event);
  console.log(event.target);
  $(event.target).css('color', 'red');
});