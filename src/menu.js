export default function menu() {
  const contentDiv = document.querySelector("#content");

  while (contentDiv.firstChild) {
    contentDiv.removeChild(contentDiv.lastChild);
  }

  const menuHeader = createField("h1", contentDiv, undefined, "Menu");
  const breakfastDiv = createField(
    "div",
    contentDiv,
    { class: "menuItem" },
    undefined
  );
  const lunchDiv = createField(
    "div",
    contentDiv,
    { class: "menuItem" },
    undefined
  );
  const dinnerDiv = createField(
    "div",
    contentDiv,
    { class: "menuItem" },
    undefined
  );

  const breakfast = createField(
    "h2",
    breakfastDiv.elementName,
    undefined,
    "Breakfast"
  );
  const lunch = createField("h2", lunchDiv.elementName, undefined, "Lunch");
  const dinner = createField("h2", dinnerDiv.elementName, undefined, "Dinner");

  const breakFastDivs = {
    eggsDiv: createField(
      "div",
      breakfastDiv.elementName,
      { class: "itemDiv" },
      undefined
    ),
    oatmealDiv: createField(
      "div",
      breakfastDiv.elementName,
      { class: "itemDiv" },
      undefined
    ),
    fruitDiv: createField(
      "div",
      breakfastDiv.elementName,
      { class: "itemDiv" },
      undefined
    ),
  };

  const breakFastItems = {
    scrambledEggs: createField(
      "p",
      breakFastDivs.eggsDiv.elementName,
      { class: "foodItem" },
      "Scrambled Eggs"
    ),
    eggsPrice: createField(
      "p",
      breakFastDivs.eggsDiv.elementName,
      { class: "price" },
      "$10"
    ),

    oatmeal: createField(
      "p",
      breakFastDivs.oatmealDiv.elementName,
      { class: "foodItem" },
      "Oatmeal"
    ),
    oatmealPrice: createField(
      "p",
      breakFastDivs.oatmealDiv.elementName,
      { class: "price" },
      "$5"
    ),

    fruit: createField(
      "p",
      breakFastDivs.fruitDiv.elementName,
      { class: "foodItem" },
      "Fresh fruit"
    ),
    fruitPrice: createField(
      "p",
      breakFastDivs.fruitDiv.elementName,
      { class: "price" },
      "$14"
    ),
  };

  menuHeader.setText().appendElement();
  breakfastDiv.setClass().appendElement();
  lunchDiv.setClass().appendElement();
  dinnerDiv.setClass().appendElement();

  breakfast.setText().appendElement();
  lunch.setText().appendElement();
  dinner.setText().appendElement();

  breakFastDivs.eggsDiv.setClass().appendElement();
  breakFastDivs.oatmealDiv.setClass().appendElement();
  breakFastDivs.fruitDiv.setClass().appendElement();

  breakFastItems.scrambledEggs.setClass().setText().appendElement();
  breakFastItems.oatmeal.setClass().setText().appendElement();
  breakFastItems.fruit.setClass().setText().appendElement();

  breakFastItems.eggsPrice.setClass().setText().appendElement();
  breakFastItems.oatmealPrice.setClass().setText().appendElement();
  breakFastItems.fruitPrice.setClass().setText().appendElement();
}

export function createField(element, appendTo, attributes, text) {
  const elementName = document.createElement(`${element}`);

  const setClass = function () {
    elementName.setAttribute("class", attributes["class"]);
    return this;
  };

  const setId = function () {
    elementName.setAttribute("id", attributes["id"]);
    return this;
  };

  const setText = function () {
    elementName.textContent = text;
    return this;
  };

  const appendElement = () => appendTo.append(elementName);

  return {
    elementName,
    setClass,
    setId,
    setText,
    appendElement,
  };
}