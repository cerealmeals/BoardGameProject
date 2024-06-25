
const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
const hamburger= document.querySelector(".hamburger");
const closeIcon= document.querySelector(".closeIcon");
const menuIcon = document.querySelector(".menuIcon");
const topLinks = document.querySelector(".top-links");

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


if (window.innerWidth > 600){
  hamburger.remove();
  window.addEventListener("resize", gapResize);
  gapResize();
}
else{
  hamburger.addEventListener("click", toggleMenu);
  document.querySelector(".list").remove();
}

function gapResize(){
  document.querySelector(".list ul").style.gap = (window.innerWidth / 20 ) + "px"
}

function getMenuHeight(){
  
  let height = document.querySelector(".header").offsetHeight;
  topLinks.style.top = height + "px";
  menu.style.top = (height + 10 + topLinks.offsetHeight) + "px";
  
}

getMenuHeight();

window.addEventListener("resize", getMenuHeight);

window.addEventListener("mouseup", function(e){
    if(isMenuOpen && !document.querySelector(".header").contains(e.target)){
        isMenuOpen = false;
        menu.classList.remove("showMenu");
        closeIcon.style.display = "none";
        menuIcon.style.display = "block";
    }
});



menuItems.forEach( 
  function(menuItem) { 
    menuItem.addEventListener("click", toggleMenu);
  }
)