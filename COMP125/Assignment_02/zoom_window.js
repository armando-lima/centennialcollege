var index = window.location.search.substring(1).split('=')[1];

function pageSetup() {
  document.getElementById("newImage").src = index; // assign filename to img element
  createEventListener();
}

function closeWin() {
  window.close();
}

function addToFavs() {
  window.opener.postMessage(index, '*');
  window.close();
}

function createEventListener() {
  var addToFavsDiv = document.getElementsByID("addToFav");
  if (addToFavsDiv.addEventListener) {
    addToFavsDiv.addEventListener("click", addToFavs, false);
  } else if (addToFavsDiv.attachEvent) {
    addToFavsDiv.attachEvent("onclick", addToFavs);
  }
}