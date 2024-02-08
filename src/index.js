import homePage from "./home";
import menu from "../src/menu";
import contact from "../src/contact";
import "./style.css";

const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const contactButton = document.querySelector(".contact");

homePage();
homeButton.addEventListener("click", homePage);
menuButton.addEventListener("click", menu);
contactButton.addEventListener("click", contact);
