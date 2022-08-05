const salary = document.querySelector("#salary");
const salaryOutput = document.querySelector(".salary-output");
salary.oninput = function () {
  salaryOutput.textContent = salary.value;
};

// UC 1: Name validation
const text = document.querySelector("#text");
const textError = document.querySelector(".text-error");
text.addEventListener("input", function () {
  let nameRegex = RegExp("^[A-Z]{1}[a-z]{2,}$");
  if (nameRegex.test(text.value)) textError.textContent = "";
  else textError.textContent = "Incorrect name";
});

// UC 2 : Email validation
const emailInput = document.querySelector("#email");
const errorEmail = document.querySelector(".email-error");
emailInput.addEventListener("input", function () {
  let emailRegex = RegExp(
    "^[a-zA-Z0-9]+([.+_-][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.][a-zA-Z]{3})+([.][a-zA-Z]{2})?$"
  );
  if (emailRegex.test(emailInput.value)) errorEmail.textContent = "";
  else errorEmail.textContent = "Invalid email";
});
