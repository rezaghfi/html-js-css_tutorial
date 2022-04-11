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
let optionsItem = optionsList.children;

step = 0;
var stopWordIndex = 0;
let stopStep = 2;
let resultNumber = 4;
var resultPlace = 0;
var runningFlag = true;
var choosedWord = "";
var score = 0;
var gameSpeed = 2000;
var play = true;
var levelNum = 1;

// render all items hidden
onload = function FistRenderOfList() {
  for (var i = 0; i < words.length; i++) {
    wordsItem[i].innerHTML = words[i];
  }
  startTimer(2,59)
};

function startTimer(minute,sec) {
  setInterval(function () {
    document.getElementById("time").innerHTML = "0" + minute + " : " + sec;
    sec--;
    if (sec == 00) {
      minute--;
      sec = 60;
      if (minute == 0) {
        minute = 2;
      }
    }
  }, 1000);
}
// return a random number bewteen 0 to 3 for the palce of true answer
function resultMaker() {
  resultPlace = Math.floor(Math.random() * resultNumber);
}

// set first step to stop word
stopWordIndex = stopStep;

function optionSelect(e) {
  choosedWord = e.innerHTML;
  if (choosedWord == words[step - 1]) {
    console.log("won");
    score += 10;
    levelNum++;
  } else {
    console.log("lose");
    score -= 5;
  }
  document.getElementById("score").innerHTML = score;
  if (levelNum % 2 == 0) {
    document.getElementById("level").innerHTML = (levelNum / 2 + 1);
    if (gameSpeed > 601) {
      gameSpeed -= 400;
    }
  }
  runningFlag = true;
  play = true;
  stopWordIndex += stopStep;
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
