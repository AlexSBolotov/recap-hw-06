const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};

const onInput = (e) => {
  e.preventDefault();
  if (!e.currentTarget.value) {
    refs.output.textContent = "Anonimous";
    return;
  }
  refs.output.textContent = e.currentTarget.value;
};

refs.input.addEventListener("input", onInput);
