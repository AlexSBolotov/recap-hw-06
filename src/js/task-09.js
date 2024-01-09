const refs = {
  body: document.querySelector("body"),
  btn: document.querySelector(".change-color"),
  text: document.querySelector(".color"),
};
const getRandomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
const onBtnClick = (e) => {
  e.preventDefault();
  refs.text.textContent = getRandomHexColor();
  refs.body.style.backgroundColor = getRandomHexColor();
};
refs.btn.addEventListener("click", onBtnClick);
