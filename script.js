const divBlurTag = document.getElementById("blur");
const divModalTag = document.getElementById("modal");
const faBarTag = document.getElementsByClassName("fa-bars")[0];
const faBackArrTag = document.getElementsByClassName("fa-arrow-right")[0];
const faDownArrTag = document.getElementsByClassName("fa-angle-down")[0];
const homeDownArr = document.getElementById("exploreMore");
faBarTag.addEventListener("click", () => {
  divBlurTag.style.display = "block";
  divModalTag.style.display = "block";
  divModalTag.classList.add("jump");
  divModalTag.classList.remove("unjump");
});
faBackArrTag.addEventListener("click", () => {
  menuToggleOff();
});
homeDownArr.addEventListener("mouseover", () => {
  faDownArrTag.classList.add("animateDown");
  faDownArrTag.classList.remove("animateUp");
});

homeDownArr.addEventListener("mouseout", () => {
  faDownArrTag.classList.remove("animateDown");
  faDownArrTag.classList.add("animateUp");
});
divBlurTag.addEventListener("click", () => {
  menuToggleOff();
});

const menuToggleOff = () => {
  divBlurTag.style.display = "none";
  setTimeout(() => (divModalTag.style.display = "none"), 500);
  divModalTag.classList.remove("jump");
  divModalTag.classList.add("unjump");
};
