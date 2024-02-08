import { createField } from "./menu";

export default function contact() {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const contactHeader = createField("h1", contentDiv, undefined, "Contact");

  const contactDiv = createField(
    "div",
    contentDiv,
    { class: "contentDiv" },
    undefined
  );

  const contactItems = {
    companyName: createField(
      "p",
      contactDiv.elementName,
      undefined,
      "The Looks Restaurant"
    ),
    addressLine1: createField(
      "p",
      contactDiv.elementName,
      undefined,
      "Seaside street 15"
    ),
    addressLine2: createField(
      "p",
      contactDiv.elementName,
      undefined,
      "90000 GREAT"
    ),
    addressLine3: createField(
      "p",
      contactDiv.elementName,
      undefined,
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
    img: createField(
      "img",
      imageDiv.elementName,
      {
        class: "compassImg",
        alt: "Compass in hand facing seaside",
        width: "50%",
        height: "40%",
        src: "../src/garrett-sears-T57t6ZUT2Kc-unsplash.jpg",
      },
      undefined
    ),
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

  contactHeader.setText().appendElement();
  contactDiv.setClass().appendElement();

  contactItems.companyName.setText().appendElement();
  contactItems.addressLine1.setText().appendElement();
  contactItems.addressLine2.setText().appendElement();
  contactItems.addressLine3.setText().appendElement();

  imageDiv.setClass().appendElement();
  imageItems.img
    .setClass()
    .setAlt()
    .setWidth()
    .setHeight()
    .setSrc()
    .appendElement();
  imageItems.imgAttr.setText().appendElement();
  imageLink.setLink().setText().appendElement();
}