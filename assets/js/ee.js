let counter = 0;

function ee(){

  if (counter === 3) {
    window.location.href = 'images/pic03.jpg';
  }
  else {
    counter ++;
  }
}

function tank() {
  document.querySelector('#tank').classList.toggle('hide');
}