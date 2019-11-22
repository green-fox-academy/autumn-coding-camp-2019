//selectorok + szoveg beallitasa
$('h1').text('Sziasztok');
// $('.osztaly').text('osztaly');
$('#id').text('id');

//css
$('#id').css({
   color: 'red',
   fontSize: 32, 
})

//hozzaadni uj taget
$('.osztaly').append(
`
  <div class="xy">
    <p id="abc">Ez mar kod</p>
    <p>Eleg meno!</p>
  </div>
`
)