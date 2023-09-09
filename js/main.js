const toggler = document.querySelector ("#toggler");
const toggledMenu = document.querySelector ("#toggledMenu");
const navButtons = document.querySelector("#navButtons");

toggler.addEventListener("click", () => {
    toggledMenu.classList.toggle("-translate-y-full")
    navButtons.classList.toggle("hidden")
})
