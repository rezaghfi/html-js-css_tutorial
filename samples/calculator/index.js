gsap.from(".container", {
  duration: 2,
  opacity: 0,
  stagger: 0.5,
  y: 500,
});
const btns = document.querySelectorAll(".num-button");
const allBtns = document.querySelectorAll(".button");
const resultBox = document.querySelector("#result-box");
const clearBtn = document.querySelector("#clear");
const total = document.querySelector("#total");
const btnSpread = [...btns];
const allBtnSpread = [...allBtns];
btnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    if (resultBox.innerHTML == "0") {
      resultBox.innerHTML = "";
    }
    let value = btns[i].innerHTML;
    resultBox.innerHTML += value;
  });
});
function evaluate(fn) {
  return new Function("return " + fn)();
}
total.addEventListener("click", () => {
  let allInputs = resultBox.innerHTML;
  resultBox.innerHTML = evaluate(allInputs);
});
clearBtn.addEventListener("click", () => {
  resultBox.innerHTML = "0";
});
allBtnSpread.forEach((button, i) => {
  button.addEventListener("click", () => {
    let element = allBtns[i];
    element.style.boxShadow =
      "inset -6px -6px 16px 0 rgba(255, 255, 255, 0.5), inset 6px 6px 16px 0 rgba(209, 205, 199, 0.5)";
    setTimeout(function () {
      element.style.boxShadow =
        "6px 6px 16px 0 rgba(209, 205, 199, 0.5) -6px -6px 16px 0 rgba(255, 255, 255, 0.5)";
    }, 0300);
  });
});
