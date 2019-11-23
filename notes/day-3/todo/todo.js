// let name = "Petike";

// let greeting = "Szia " + name;
// let greeting2 = `Szia ${name}`;

// let szam = 0;
// let keresesEredemnye = null;

// if(keresesEredmenye == null) {
//     $('#eredmeny').text('Nem találtam semmit.');
// } else {
//     $('#eredmeny').text(keresesEredmenye);
// }

// function getRefName() {
//     return 'todos';
// }

let refName = 'todos';
let count = 0;


// Kiolvasom az adatbázisból a teendők
database.ref(refName).once('value').then(data => {
    let tennivalok = Object.values(data.val());

    // Minden egyes todot megjelenít
    tennivalok.forEach((tennivalo) => {
        addTodoToList(tennivalo);
    });

    // Megszámolja és megjeleníti a teendők számát
    count = tennivalok.length;
    $('.todocount').text(count);
})

// let tennivalok = ['valami', 'Buy milk', 'Walk the dog', 'Go to party'];

// Ha megnyomom a gombot
$('#gomb').on('click', () => {
    let todoToAdd = $('#ertek').val();

    addTodoToList(todoToAdd);

    // Itt adjuk hozzá az adatbázishoz a tennivalót
    database.ref(refName).push(todoToAdd);

    $('#ertek').val('');
    count = count + 1;
    $('.todocount').text(count);
});




$('.todocount').text(count);

function addTodoToList(todo) {
    let html = `
        <li>${todo}</li>
    `;

    $('ul').append(html);
}
