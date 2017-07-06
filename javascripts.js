'use strict';

function close() {
  document.getElementById("overlay").style.display = "none";
}

function join() {
  if(button.innerHTML == "Mitmachen") {
    button.innerHTML = "Austreten";
    document.getElementById("overlay").style.display = "block";

    setTimeout(function(){
      close();
    }, 2000);

  } else {
    button.innerHTML = "Mitmachen";
  }

}

var button = document.getElementById("join");
button.addEventListener('click', join);

var closeButton = document.getElementById("close");
closeButton.addEventListener('click', close);
