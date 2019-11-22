let tennivalok = ['valami','Buy milk', 'Walk the dog', 'Go to party']
let count = tennivalok.length;
$('#gomb').on('click', (event) => {
    let inputErtek = $('#ertek').val();
    $('ul').append(
        `
        <li>${inputErtek}</li>
        `
    );
    $('#ertek').val('');
    count = count + 1;
    $('.todocount').text(count);
})

tennivalok.forEach((tennivalo) => {
    $('ul').append(`
        <li>${tennivalo}</li>
    `)
});


$('.todocount').text(count);
