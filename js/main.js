const returnTop = document.querySelector(".js-returnTop");

window.addEventListener("scroll", () => {
  if (window.scrollY >= window.innerHeight / 2) {
    returnTop.classList.add("visible");
  } else if (window.scrollY < window.innerHeight / 2) {
    returnTop.classList.remove("visible");
  }
});
