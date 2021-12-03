window.onscroll= function () {
  let header = document.getElementById("nav_header")
  if(window.scrollY > 50) {
    header.classList.add("black-bar")
  } else {
    header.classList.remove("black-bar")
  }
}
