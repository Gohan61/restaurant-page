import restaurantImg from "./jason-leung-poI7DelFiVA-unsplash.jpg";

export default function homePage() {
  const contentTitle: HTMLHeadElement = document.createElement("h1");
  const restaurantImage: HTMLImageElement = new Image();
  const restuarantImageAttr: HTMLParagraphElement = document.createElement("p");
  const restuarantImageAttrLink: HTMLAnchorElement =
    document.createElement("a");
  const restaurantDescription: HTMLDivElement = document.createElement("div");
  const contentDiv: HTMLDivElement | null = document.querySelector("#content");

  if (contentDiv) {
    while (contentDiv.firstChild) {
      contentDiv.removeChild(contentDiv.lastChild!);
    }
  }

  contentTitle.textContent = "Our beautiful restaurant";
  restuarantImageAttr.textContent = "Photo by ";
  restuarantImageAttrLink.textContent = "Jason Leung";
  restaurantDescription.textContent = `Our restaurant cares more about its looks than the 
food we serve. 
We want you to have a good time, enjoy the scene and the people.
Our goal is not to make you think about how the food tastes but how time has past in a
very enjoyable manner.`;

  restaurantImage.src = restaurantImg;
  restaurantImage.setAttribute("alt", "Modern vintage restaurant");
  restaurantImage.setAttribute("width", "100%");
  restaurantImage.setAttribute("height", "30%");

  const restuarantImageLink = {
    href: "https://unsplash.com/photos/photo-of-pub-set-in-room-during-daytime-poI7DelFiVA?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
  };

  setAttributes(restuarantImageAttrLink, restuarantImageLink);

  if (contentDiv) {
    appendItem(contentTitle, contentDiv);
    appendItem(restaurantImage, contentDiv);
    appendItem(restuarantImageAttr, contentDiv);
    appendItem(restaurantDescription, contentDiv);
    appendItem(restuarantImageAttrLink, restuarantImageAttr);
  }

  return { setAttributes, appendItem };
}

type Elements =
  | HTMLAnchorElement
  | HTMLParagraphElement
  | HTMLHeadElement
  | HTMLImageElement
  | HTMLDivElement;

export function setAttributes(element: Elements, attributes: any): void {
  for (const [key, value] of Object.entries(attributes)) {
    element.setAttribute(key, value as string);
  }
}

export function appendItem(element: Elements, itemTo: Elements): void {
  itemTo.appendChild(element);
}
