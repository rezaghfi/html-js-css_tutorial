const cards = document.querySelectorAll(".card"),
  timeTag = document.querySelector(".time b"),
  flipsTag = document.querySelector(".flips b"),
  refreshBtn = document.querySelector(".details button");

//تعاریف پایه قبل از شروع بازی
let maxTime = 60;
let timeLeft = maxTime;
let flips = 0;
let matchedCard = 0;
let disableDeck = false;
let isPlaying = false;
let cardOne, cardTwo, timer;

// flip cardبعد از کلیک کردن روی هرکارتی، کارت برعکس میشه و فانکشن اجرا میشه
cards.forEach((card) => {
  card.addEventListener("click", flipCard);
});

function flipCard({ target: clickedCard }) {
  //با کلیک کردن کاربر روی اولین کارت تایمر شروع میشه
  if (!isPlaying) {
    isPlaying = true;
    timer = setInterval(initTimer, 1000);
  }

  //فانکشن مربوط به شروع و پایان  زمان که اگه کاربر درحال بازی باشه هرثانیه کم میشه و هروقت تایم صفر شد دوباره ریست میشه
  function initTimer() {
    if (timeLeft <= 0) {
      return clearInterval(timer);
    }
    timeLeft--;
    timeTag.innerText = timeLeft;
  }

  // اگر کاربر کارتی رو انتخاب کرد که انتخاب اولش نبود و از قبل انتخاب نشده بود و زمان باقی مونده بود در نتیجه به تعداد فلیپ ها اضافه کن و ادامه بازی
  if (clickedCard !== cardOne && !disableDeck && timeLeft > 0) {
    flips++;
    flipsTag.innerText = flips;
    clickedCard.classList.add("flip");

    //اگه کارت اولی که روش کلیک شد با  کارت بعدی مخالف بود کارت هارو برگردون
    if (!cardOne) {
      return (cardOne = clickedCard);
    }

    //  اگه کارت اول که روش کلیک شد با کارت دوم یکی بود درنتیجه کارت هارو غیرفعال کن و بزار روی سمتی که عکس مشابه دارن باقی بمونن
    cardTwo = clickedCard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-view img").src,
      cardTwoImg = cardTwo.querySelector(".back-view img").src;

    //تعریف (مچ کارت)
    matchCards(cardOneImg, cardTwoImg);
  }
}

function matchCards(img1, img2) {
  //به ازای هردوتا کارت مشابه به تعداد (مچ کارت) ها اضافه کن
  if (img1 === img2) {
    matchedCard++;

    //اگر تعداد (مچ کاذت) ها به 6 تا رسید یعنی همه کارت ها مشابه شدن دوباره تایم بازی ریست شه
    if (matchedCard == 6 && timeLeft > 0) {
      return clearInterval(timer);
    }
    cardOne.removeEventListener("click", flipCard);
    cardTwo.removeEventListener("click", flipCard);
    return (disableDeck = false);
  }
}

//دکمه ی رفرش کردن و دوباره بازی کردن
function hasan() {
  location.reload();
}
