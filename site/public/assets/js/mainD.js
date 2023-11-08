
const sideMenu = document.querySelector("aside");
const menuBtn = document.querySelector("#menuD-btn");
const closeBtn = document.querySelector("#closeD-btn");
const themeToggler = document.querySelector(".theme-toggler")
const openMU = document.getElementById('open-modal-u');
const modal_container = document.getElementById('modal_container');
const closeMU = document.getElementById('closeMU');
const modal_container2 = document.getElementById('modal_container2');
const open2 = document.getElementById('open2');


// show sidebar
menuBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'block';
})
// close sidebar
closeBtn.addEventListener('click', () =>{
    sideMenu.style.display = 'none';
})

// change theme
themeToggler.addEventListener('click', () =>{
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('activeD');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('activeD');
})

// alertas
var close = document.getElementsByClassName("closebtn");
var i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function(){
    var div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function(){ div.style.display = "none"; }, 600);
  }
}

// modal add usu
openMU.addEventListener('click', () => {
  modal_container.classList.add('show');
});

closeMU.addEventListener('click', () => {
  modal_container.classList.remove('show');
});

// modal metrica
open2.addEventListener('click', () => {
  modal_container2.classList.add('show');
});

modal_container2.addEventListener('click', () => {
  modal_container2.classList.remove('show');
});