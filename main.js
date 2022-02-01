const menubtn = document.querySelector(".menu-btn");
const sidebar = document.querySelector(".side");
let menuOpen = false;

menubtn.addEventListener("click", () => {
  if (!menuOpen) {
    menubtn.classList.add("Open");
    sidebar.classList.add("bar");
    menuOpen = true;
  } else {
    menubtn.classList.remove("Open");
    sidebar.classList.remove("bar");
    menuOpen = false;
  }
});
