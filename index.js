window.addEventListener("resize", greenBar)
greenBar()
function greenBar() {
  let green_bar_height = document.querySelector(".coreStatement p").offsetHeight;
  document.querySelector(".green-bar").style.height = green_bar_height + "px"
}