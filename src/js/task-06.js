const input = document.querySelector("#validation-input");

const changeClasses = (el, classToAdd, classToRemove) => {
  el.classList.add(classToAdd);
  el.classList.remove(classToRemove);
};
const onBlur = (e) => {
  e.preventDefault();

  if (
    e.currentTarget.dataset.length === e.currentTarget.value.length.toString()
  ) {
    changeClasses(e.currentTarget, "valid", "invalid");
  } else {
    changeClasses(e.currentTarget, "invalid", "valid");
  }
};

input.addEventListener("blur", onBlur);
