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

// UC 3 : Mobile no validation
const mobileInput = document.querySelector("#tel");
const errorMobile = document.querySelector(".tel-error");
mobileInput.addEventListener("input", function () {
  let mobileRegex = RegExp("^[0-9]{2}[ ]*[0-9]{10}$");
  if (mobileRegex.test(mobileInput.value)) errorMobile.textContent = " ";
  else errorMobile.textContent = "Invalid number";
});

// UC 4 : Password Rule1-5
const password = document.querySelector("#pwd");
const errorPwd = document.querySelector(".pwd-error");
password.addEventListener("input", function () {
  let pwdRegex = RegExp(
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$"
  );
  if (pwdRegex.test(password.value)) errorPwd.textContent = "";
  else errorPwd.textContent = "Invalid Password";
});
