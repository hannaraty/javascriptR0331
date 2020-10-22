
// Luo sulkunappin ja lisää listan kohtien perään
var myLista = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myLista.length; i++) {
  var span = document.createElement("SPAN");
  var teksti = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(teksti);
  myLista[i].appendChild(span);
}


// sulkunapista listan kohtien piilotus
var sulje = document.getElementsByClassName("close");
var i;
for (i = 0; i < sulje.length; i++) {
  sulje[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}


// Merkkaa tehdyksi (lisäämällä checkmark), kun klikkaa listan kohtia
var lista = document.querySelector('ul');
lista.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);


// luo uuden kohdan listaan "Lisää"-napilla
function uusiKohta() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("inputti").value;
  var z = document.createTextNode(inputValue);
  li.appendChild(z);
  if (inputValue === '') {
    alert("Jätit kentän tyhjäksi!");
  } else {
    document.getElementById("osat").appendChild(li);
  }
  document.getElementById("inputti").value = "";

  var span = document.createElement("SPAN");
  var teksti = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(teksti);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}