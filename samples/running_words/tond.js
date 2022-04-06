var words = [
  "امیر",
  "محمد",
  "یعقوب",
  "حسین",
  "محسن",
  "جلیل",
  "علی",
  "حسن",
  "تقی",
  "رضا",
];
var options = [
  "مریم",
  "نازنین",
  "حدیث",
  "هستی",
  "ایدا",
  "زهرا",
  "مهسا",
  "فروهر",
  "رزیتا",
  "الهام",
];

let wordsItem = wordsList.children;
let optionsItem = resultsList.children;

step = 0;
var stopWordIndex = 0;
let stop = 3;
let resultNumber = 4;
var resultPlace = 0;
var runningFlag = true;
var choosedWord = "";
var score = 0;
var gameSpeed = 1000;
var play = true;

// render all items hidden
onload = function FistRenderOfList() {
  for (var i = 0; i < words.length; i++) {
    wordsItem[i].innerHTML = words[i];
  }
};

// return a random number bewteen 0 to 3 for the palce of true answer
function resultMaker() {
  resultPlace = Math.floor(Math.random() * resultNumber);
}

// return a random number for next step of the game (between 1 to 3)
function stopMaker() {
  stopWordIndex += Math.floor(Math.random() * stop) + 1;
}

stopMaker();

function userSelect(e) {
  choosedWord = e.innerHTML;
  if (choosedWord == words[step - 1]) {
    // alert("true asnwer");
    console.log("won");

    score += 10;
    if (gameSpeed > 701) {
      gameSpeed -= 100;
    }
  } else {
    // alert("false asnwer");
    console.log("lose");

    score -= 5;
  }
  document.getElementById("score").innerHTML = score;
  runningFlag = true;
  play = true;
  stopMaker();
}

function finalRender() {
  if (play == true) {
    if (step == stopWordIndex) {
      runningFlag = false;
      play = false;
      resultMaker();
      // this for is for fill the result li with one true answer
      for (var i = 0; i < resultNumber; i++) {
        var fakeResult = Math.floor(Math.random() * options.length);
        if (resultPlace == i) {
          optionsItem[i].innerHTML = words[step - 1];
        } else {
          optionsItem[i].innerHTML = options[fakeResult];
        }
      }
    } else if (runningFlag == true && step < words.length) {
      if (step > 0) {
        wordsItem[step - 1].className = "hid";
      }
      wordsItem[step].className = "show border";
      step++;
    }
  } else if (play == false) {
    console.log("noooo");
    wordsItem[step - 1].className = "hid";
  }
}

setInterval(finalRender, gameSpeed);
