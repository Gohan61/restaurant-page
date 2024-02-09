import { createField } from "./menu";
import myCompass from "./garrett-sears-T57t6ZUT2Kc-unsplash.jpg";

export default function contact() {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const contactHeader = createField("h1", contentDiv, undefined, "Contact");

  const contactDiv = createField(
    "div",
    contentDiv,
    { class: "contactDiv" },
    undefined
  );

  const contactItems = {
    companyName: createField(
      "p",
      contactDiv.elementName,
      { class: "address" },
      "The Looks Restaurant"
    ),
    addressLine1: createField(
      "p",
      contactDiv.elementName,
      { class: "address" },
      "Seaside street 15"
    ),
    addressLine2: createField(
      "p",
      contactDiv.elementName,
      { class: "address" },
      "90000 GREAT"
    ),
    addressLine3: createField(
      "p",
      contactDiv.elementName,
      { class: "address" },
      "LOOKMOND"
    ),
  };

  const imageDiv = createField(
    "div",
    contentDiv,
    { class: "imageDiv" },
    undefined
  );

  const imageItems = {
    imgAttr: createField("p", imageDiv.elementName, undefined, "Photo by "),
  };

  const imageLink = createField(
    "a",
    imageItems.imgAttr.elementName,
    {
      href: "https://unsplash.com/@garrettsears?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
    "Garret Sears"
  );

  const compassVar = new Image();
  compassVar.src = myCompass;
  compassVar.setAttribute("class", "compassImg");
  compassVar.setAttribute("alt", "Compass in hand facing seaside");
  compassVar.setAttribute("width", "50%");
  compassVar.setAttribute("height", "40%");

  contactHeader.setText().appendElement();
  contactDiv.setClass().appendElement();

  contactItems.companyName.setText().setClass().appendElement();
  contactItems.addressLine1.setText().setClass().appendElement();
  contactItems.addressLine2.setText().setClass().appendElement();
  contactItems.addressLine3.setText().setClass().appendElement();

  imageDiv.setClass().appendElement();
  imageDiv.elementName.appendChild(compassVar);

  imageItems.imgAttr.setText().appendElement();
  imageLink.setLink().setText().appendElement();
}
