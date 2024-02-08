export default function menu() {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }
}
