import homePage from "./home";
import menu from "./menu";
import contact from "./contact";
import "./style.css";

const homeButton: HTMLButtonElement | null = document.querySelector(".home");
const menuButton: HTMLButtonElement | null = document.querySelector(".menu");
const contactButton: HTMLButtonElement | null =
  document.querySelector(".contact");

homePage();
if (homeButton && menuButton && contactButton) {
  homeButton.addEventListener("click", homePage);
  menuButton.addEventListener("click", menu);
  contactButton.addEventListener("click", contact);
}
