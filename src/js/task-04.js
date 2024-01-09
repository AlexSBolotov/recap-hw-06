const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');
const counter = document.querySelector("#value");
let counterStatus = 0;
const handlerDec = (e) => {
  console.log(e.currentTarget);
  counterStatus--;
  counter.textContent = counterStatus;
};
const handlerInc = () => {
  counterStatus++;
  counter.textContent = counterStatus;
};

decBtn.addEventListener("click", handlerDec);
incBtn.addEventListener("click", handlerInc);
