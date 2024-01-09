const ctrDiv = document.querySelector("#controls");
const refs = {
  input: ctrDiv.querySelector("input"),
  createBtn: ctrDiv.querySelector("[data-create]"),
  destroyBtn: ctrDiv.querySelector("[data-destroy]"),
  parentDiv: document.querySelector("#boxes"),
};
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const createMarkup = (number) => {
  let markup = "";
  let width = 0;
  for (let i = 1; i <= number; i++) {
    width += 10;
    let color = getRandomHexColor();
    markup += `<div style="width: ${width}px; height: ${width}px; background-color: ${color}"></div>`;
  }
  return markup;
};
const onCreateClick = () => {
  refs.parentDiv.insertAdjacentHTML(
    "afterbegin",
    createMarkup(refs.input.value)
  );
};
const onDestroyClick = () => {
  refs.parentDiv.innerHTML = "";
  refs.input.value = "";
};

refs.createBtn.addEventListener("click", onCreateClick);
refs.destroyBtn.addEventListener("click", onDestroyClick);
