const toggleBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".main-menu");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle("show");
});
