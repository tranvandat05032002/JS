const slider = document.querySelector(".slider");

const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

const carousel = document.querySelector(".carousel");

var direction;

const handleNext = () => {
  direction = -1;
  slider.style.transform = "translate(-20%)";
  carousel.style.justifyContent = "flex-start";
};
const handlePrev = () => {
  if (direction === -1) {
    slider.appendChild(slider.firstElementChild);
    direction = 1;
  }
  slider.style.transform = "translate(20%)";
  carousel.style.justifyContent = "flex-end";
};
const handleTransitioned = () => {
  direction === -1
    ? slider.appendChild(slider.firstElementChild)
    : slider.prepend(slider.lastElementChild);
  slider.style.transition = "none";
  slider.style.transform = "translate(0)";
  setTimeout(() => {
    slider.style.transition = "all 0.5s";
  });
};
prev.addEventListener("click", handlePrev);
next.addEventListener("click", handleNext);
slider.addEventListener("transitionend", handleTransitioned);
