const refs = {
  input: document.querySelector("#font-size-control"),
  span: document.querySelector("#text"),
};

const onInput = (e) => {
  refs.span.style.fontSize = `${e.currentTarget.value}px`;
};

refs.input.addEventListener("input", onInput);
