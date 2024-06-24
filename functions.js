
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");

let isMenuOpen = false;

function toggleMenu() {
  if (isMenuOpen) {
    isMenuOpen = false;
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
  } else {
    isMenuOpen = true;
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
  }
}

let height = document.querySelector(".header").offsetHeight + 10;
menu.style.top = height + "px";

window.addEventListener("resize", greenBar)
greenBar()
function greenBar() {
  let green_bar_height = document.querySelector(".coreStatement p").offsetHeight;
  document.querySelector(".green-bar").style.height = green_bar_height + "px"
}

window.addEventListener("mouseup", function(e){
    if(isMenuOpen && !document.querySelector(".header").contains(e.target)){
        isMenuOpen = false;
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
});

hamburger.addEventListener("click", toggleMenu);

menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)