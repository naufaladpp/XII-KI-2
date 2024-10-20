const date = new Date();
const hours = date.getHours();
if (hours >= 1 && hours < 12) {
  document.getElementById("good").innerHTML = "Selamat Pagi";
}
if (hours >= 12  && hours < 18) {
  document.getElementById("good").innerHTML = "Selamat Sore";
}
if (hours >= 18 && hours < 24) {
  document.getElementById("good").innerHTML = "Selamat Malam";
}

const body = document.querySelector('body');
const judul1 = document.getElementById('judul1');
const judul2 = document.getElementById('judul2');
const judul3 = document.getElementById('judul3');
const judul4 = document.getElementById('judul4');
const judul5 = document.getElementById('judul5');
const judul6 = document.getElementById('judul6');
const judul7 = document.getElementById('judul7');
const judul8 = document.getElementById('judul8');
const judul9 = document.getElementById('judul9');
const quote = document.getElementById('quote');
const quoteright = document.getElementById('quoteright');
const navbar_bottom = document.getElementById('navbar_bottom');
const bwh_wlc = document.getElementById('bwh_wlc');
const good = document.getElementById('good');



toggle.addEventListener('click', function() {
  this.classList.toggle('bi-brightness-high-fill');
  if (this.classList.toggle('bi-moon')) {
    body.style.backgroundImage = "linear-gradient(#FF8008,#FFFDE9 )";
    body.style.color = 'white';
    body.style.transition = '2s';
    document.getElementById('tarik').style.opacity = '97%';
    document.getElementById('Welc').style.boxShadow = 'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px';
    document.getElementById('tarik').style.backgroundImage = "linear-gradient(whitesmoke,white)";
    document.getElementById('tarik').style.filter = 'invert(0)';
    document.getElementById('navbar_top').style.filter = 'invert(0)';
    navbar_bottom.style.filter = 'invert(0)';
    document.getElementById('submit').style.color = 'white';
    judul1.style.color = 'white';
    judul2.style.color = 'white';
    judul3.style.color = 'white';
    judul4.style.color = 'white';
    judul5.style.color = 'white';
    judul6.style.color = 'white';
    judul7.style.color = 'white';
    judul8.style.color = 'white';
    judul9.style.color = 'white';
    quoteright.style.color = 'white';
    quote.style.color = 'white';
    bwh_wlc.style.opacity = '97%';
    good.style.opacity = '98%';
    document.getElementById('navbar_top').style.opacity = '95%';


  } else {
    body.style.backgroundImage = "linear-gradient(black, purple)";
    body.style.color = 'white';
    body.style.transition = '2s';
    document.getElementById('tarik').style.opacity = '87%';
    document.getElementById('Welc').style.boxShadow = '#E6E6E6 0px 10px 20px, #E6E6E6 0px 6px 6px';
    document.getElementById('tarik').style.backgroundImage = "linear-gradient(whitesmoke,#f8b500)";
    document.getElementById('tarik').style.color = 'black';
    document.getElementById('submit').style.color = 'black';
    document.getElementById('tarik').style.filter = 'invert(1)';
    judul1.style.color = 'black';
    judul2.style.color = 'red';
    judul3.style.color = 'red';
    judul4.style.color = 'red';
    judul5.style.color = 'red';
    judul6.style.color = 'red';
    judul7.style.color = 'black';
    judul8.style.color = 'black';
    judul9.style.color = 'black';
    quoteright.style.color = 'black';
    quote.style.color = 'black';
    bwh_wlc.style.opacity = '80%';
    good.style.opacity = '80%';
    document.getElementById('navbar_top').style.filter = 'invert(1)';
    document.getElementById('navbar_top').style.opacity = '95%';
    navbar_bottom.style.filter = 'invert(1)';
    navbar_bottom.style.boxShadow = '0px -3px 5px -3px black';
  }
});
