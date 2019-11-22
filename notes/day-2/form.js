//kattintas esemeny
$('h1').on('click', (event) => {
    $('h1').css({
        color: 'red',
     })
})

//form es adat
$('form').on('submit', (event) =>{
    event.preventDefault();
    let name = $('#name').val();
    let age = $('#age').val();
    $('.emberek').append(`
        <p class="egyember">My name is: ${name}</p>
        <p class="egyember">My age is: ${age}</p>
    `)
})