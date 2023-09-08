const toggler = document.querySelector("#toggler");
const togglerI = document.querySelector("#toggler a i");
const toggledMenu = document.querySelector("#toggledMenu");

toggler.addEventListener("click", () => {
  if (toggledMenu.classList.contains("-translate-y-full")) {
    toggledMenu.classList.toggle("-translate-y-full");
    togglerI.classList.toggle("fa-xmark");
  } else {
    toggledMenu.classList.toggle("-translate-y-full");
    togglerI.classList.toggle("fa-xmark");
  }
});
