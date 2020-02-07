const open = document.querySelector(".open");
const icon = document.querySelector(".mobile");

open.addEventListener("click", () => {
  icon.classList.toggle("open-side-menu");
  open.classList.toggle("rotate");
});
