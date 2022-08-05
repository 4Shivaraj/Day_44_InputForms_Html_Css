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