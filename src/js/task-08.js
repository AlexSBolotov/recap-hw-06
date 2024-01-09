const form = document.querySelector(".login-form");

const onFormSubmit = (e) => {
  e.preventDefault();
  const {
    elements: { email, password },
  } = e.currentTarget;
  if (!email.value || !password.value) {
    alert("All the fields must be fullfilled!");
    return;
  }
  const formBody = {
    [email.type]: email.value,
    [password.type]: password.value,
  };
  console.log(formBody);
  e.currentTarget.reset();
};

form.addEventListener("submit", onFormSubmit);
