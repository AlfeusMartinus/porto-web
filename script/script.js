var navBar = document.querySelector(".nav-bar");
var navList = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

navBar.addEventListener('click', function(){
    this.classList.toggle('click');
    navList.classList.toggle('open');
});