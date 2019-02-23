console.log('mukszik')

$('tbody').append(`
      <tr>
      <td>Versenyzo 3</td>
      <td>11</td>
      </tr>
    `);

$('.racer').on('click', (event) => {
  console.log('racer vagyok')
})

database = firebase.database();

$('#kattincsButton').on('click', (event) => {
  event.preventDefault();
  let racerName = $('#racerName').val();
  let roundTime = $('#roundTime').val();
  let dataToSave = { racerName: racerName, roundTime: roundTime };
  database.ref("racer").push(dataToSave);
});

database.ref("post").once('value').then(data => {
  data.forEach(element => {
    $('tbody').append(`
      <tr>
        <td>${element.child('racerName').val()}</td>
        <td>${element.child('roundTime').val()}</td>
      </tr>
    `);
  });
});