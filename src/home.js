export default function homePage() {
  const contentTitle = document.createElement("h1");
  const restuarantImage = document.createElement("img");
  const restuarantImageAttr = document.createElement("p");
  const restuarantImageAttrLink = document.createElement("a");
  const restaurantDescription = document.createElement("div");
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  contentTitle.textContent = "Our beautiful restaurant";
  restuarantImageAttr.textContent = "Photo by ";
  restuarantImageAttrLink.textContent = "Jason Leung";
  restaurantDescription.textContent = `Our restaurant cares more about its looks than the 
food we serve. 
We want you to have a good time, enjoy the scene and the people.
Our goal is not to make you think about how the food tastes but how time has past in a
very enjoyable manner.`;

  const restuarantImageAttributes = {
    src: "../src/jason-leung-poI7DelFiVA-unsplash.jpg",
    alt: "Modern vintage restaurant",
    width: "100%",
    height: "30%",
  };

  const restuarantImageLink = {
    href: "https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  };

  setAttributes(restuarantImage, restuarantImageAttributes);
  setAttributes(restuarantImageAttrLink, restuarantImageLink);

  appendItem(contentTitle, contentDiv);
  appendItem(restuarantImage, contentDiv);
  appendItem(restuarantImageAttr, contentDiv);
  appendItem(restaurantDescription, contentDiv);
  appendItem(restuarantImageAttrLink, restuarantImageAttr);

  return { setAttributes, appendItem };
}

export function setAttributes(element, attributes) {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value);
  }
}

export function appendItem(element, itemTo) {
  itemTo.appendChild(element);
}
