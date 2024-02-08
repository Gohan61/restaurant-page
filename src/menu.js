import { setAttributes } from "./home";
import { appendItem } from "./home";

export default function menu() {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const menuHeader = document.createElement("h1");
  const breakfast = document.createElement("div");
  const lunch = document.createElement("div");
  const dinner = document.createElement("div");

  menuHeader.textContent = "Menu";

  appendItem(menuHeader, contentDiv);
}
