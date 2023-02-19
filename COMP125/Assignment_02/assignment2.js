let slideIndex = 1;

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function openNewWindow(n) {
  var mainFig = document.getElementsByTagName("img")[n];
  var zoomWindow = window.open("zoomed_window.html?index=" + mainFig.src, "zoomwin", "height=auto,width=1000px");
  zoomWindow.focus();
}

function createEventListeners() {

  window.addEventListener('message', function (event) {
    var favs = document.getElementById('favs');

    if (favs.children.length > 4) {
      window.alert('Maximum number of favorites is 5!');
      return;
    }

    var div = document.createElement('div');
    favs.appendChild(div);

    var img = document.createElement('img');
    img.src = event.data;
    img.width = 170;
    div.appendChild(img);

    var par = document.createElement('p');
    div.appendChild(par);

      var button = document.createElement('button');
      button.type = 'button';
      button.innerText = 'Remove';
      par.appendChild(button);
      button.addEventListener('click', function () {
        favs.removeChild(div);
      });
  });
}

function pageSetup() {
  showSlides(1);
  createEventListeners();
}