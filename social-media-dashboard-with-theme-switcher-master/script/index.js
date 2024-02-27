const body = document.querySelector("body");
const OuterContainer = document.querySelector(".outer-container");
const Header = document.querySelector(".top-header");
const SecondHeader = document.querySelector(".second-header");
const toggle = document.getElementById("toggle");
const LightCard = document.querySelectorAll(".Cards");
toggle.onclick = function () {
  toggle.classList.toggle("active");
  body.classList.toggle("active");
  OuterContainer.classList.toggle("active");
  Header.classList.toggle("active");
  SecondHeader.classList.toggle("active");
  // Loop through each element in the LightCard NodeList
  for (let card of LightCard) {
    // Toggle the lightcard class on each element
    card.classList.toggle("active");
  }
};
