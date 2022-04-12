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
var levelNum = 1;
var lastWordIndex = 9;

// render all items hidden
onload = function FistRenderOfList() {
  for (var i = 0; i < words.length; i++) {
    wordsItem[i].innerHTML = words[i];
  }
  startTimer(0, 59);
};

function startTimer(minute, sec) {
  setInterval(function () {
    document.getElementById("time").innerHTML = sec + " : " + "0" + minute;
    sec--;
    if (sec == 00) {
      if (minute == 0) {
        document.getElementById("time").innerHTML = "00 : ))"
        return;
      }
      minute--;
      sec = 60;
    }
  }, 1000);
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
    document.getElementById("level").innerHTML = levelNum / 2 + 1;
    if (gameSpeed > 601) {
      gameSpeed -= 400;
    }
  }
  // the flag that running word in finalRender function
  runningFlag = true;
  stopWordIndex += stopStep;
  // hide optionItem after select answer
  for (i = 0; i < optionsItem.length; i++) {
    optionsItem[i].innerHTML = "";
  }
}

function finalRender() {
  if (runningFlag == true) {
    if (step == stopWordIndex) {
      // this for is for fill the result with one true answer an fake answer in another
      resultPlace = Math.floor(Math.random() * resultNumber);
      for (var i = 0; i < resultNumber; i++) {
        var fakeResult = Math.floor(Math.random() * options.length);
        if (resultPlace == i) {
          optionsItem[i].innerHTML = words[step - 1];
        } else {
          optionsItem[i].innerHTML = options[fakeResult];
        }
      }
      //stop running words then you click on options
      runningFlag = false;
    } else if (step < words.length) {
      if (step > 0) {
        wordsItem[step - 1].className = "hid";
      }
      wordsItem[step].className = "show border";
      step++;
    } else {
      step = 0;
      wordsItem[step].className = "show border";
      wordsItem[words.length-1].className = "hid";
      stopWordIndex = stopStep;
      console.log(runningFlag);
    }
  } else{
    console.log("noooo");
    wordsItem[step - 1].className = "hid";
  }
}

setInterval(finalRender, gameSpeed);
