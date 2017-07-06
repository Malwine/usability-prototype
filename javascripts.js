'use strict';

function close() {
  document.getElementById("overlay").style.display = "none";
}

function join() {
  if(button.innerHTML == "Mitmachen") {
    button.innerHTML = "Austreten";
    document.getElementById("myself").style.display = "block";
    document.getElementById("overlay").style.display = "block";

    setTimeout(function(){
      close();
    }, 2000);

  } else {
    button.innerHTML = "Mitmachen";
    document.getElementById("myself").style.display = "none";
  }

}

var button = document.getElementById("join");
button.addEventListener('click', join);

var closeButton = document.getElementById("close");
closeButton.addEventListener('click', close);
