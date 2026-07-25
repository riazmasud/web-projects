const menuBtn = document.querySelector(".menu");
const primaryNav = document.getElementById("primary-navigation");

menuBtn.addEventListener("click", () => {
  document.querySelectorAll(".target").forEach((item) => {
    item.classList.toggle("change");
  });
  const expanded = menuBtn.classList.contains("change");
  menuBtn.setAttribute("aria-expanded", String(expanded));
  primaryNav.toggleAttribute("inert", !expanded);
});

const icons = document.querySelectorAll(".section-1-icons i");

let i = 1;

setInterval(() => {
  i++;
  const icon = document.querySelector(".section-1-icons .change");
  icon.classList.remove("change");

  if (i > icons.length) {
    icons[0].classList.add("change");
    i = 1;
  } else {
    icon.nextElementSibling.classList.add("change");
  }
}, 4000);
