let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// formularz.js

function obsluzFormularz(event) {
  event.preventDefault(); // Zapobiegamy domyślnej akcji formularza (przeładowaniu strony)

  // Pobieramy wartości pól formularza
  var imie = document.getElementById("imie").value;
  var email = document.getElementById("email").value;
  var ocena = document.getElementById("ocena").value;
  var ulubioneMiejsce = document.getElementById("ulubione-miejsce").value;
  var komentarz = document.getElementById("komentarz").value;

  // Pobieramy zaznaczone zainteresowania
  var zainteresowania = [];
  var checkboxes = document.getElementsByName("interesy[]");
  for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
          zainteresowania.push(checkboxes[i].value);
      }
  }

  // Możesz teraz przetwarzać te dane lub wysłać je na serwer
  console.log("Imię: " + imie);
  console.log("Email: " + email);
  console.log("Ocena: " + ocena);
  console.log("Ulubione miejsce: " + ulubioneMiejsce);
  console.log("Komentarz: " + komentarz);
  console.log("Zainteresowania: " + zainteresowania);
}

// Nasłuchujemy na zdarzenie submit formularza
document.getElementById("myForm").addEventListener("submit", obsluzFormularz);
