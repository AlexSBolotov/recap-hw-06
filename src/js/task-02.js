const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const list = document.querySelector("#ingredients");

const markup = (setArr) => {
  return setArr.map((el) => {
    const item = document.createElement("li");
    item.textContent = el;
    item.classList.add("item");
    console.log(item);
    return item;
  });
};

console.log(markup(ingredients));
list.append(...markup(ingredients));
