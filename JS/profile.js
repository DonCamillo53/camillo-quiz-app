const background = document.querySelector("main");
const darkmodeToggle = document.getElementById("dark-mode-toggle");

darkmodeToggle.addEventListener("click", () => {
  if (background.classList.contains("profile-main")) {
    background.classList.add("profile-main-dark-mode");
    background.classList.remove("profile-main");
  } else {
    background.classList.add("profile-main");
    background.classList.remove("profile-main-dark-mode");
  }
});
