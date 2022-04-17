
//  timer =================================================
const startTimer = (duration, display) =>{
    var timer = duration, minutes, seconds;
  const timerHandler =   setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

    
        if (--timer < 0) {
            // timer = duration;
            clearInterval(timerHandler)
        }
    }, 1000);
}



// ===============================================================


const wordArray = ['ball' , "book" , "man","ali" , "sara" , "owner"
, "pen" , "computer" , "sky" , "insurance" , 'tabel' , 'programmer' , "language",
"word" , "sea" , "tea" , "moon" , 'wolf' , "tiger" , "abstract" , "timer",
"chair" , "head" , "hands" , "offer" , "conataine" , "mitra" , "love" ,"phone",
"english" , "music" , "taxi" , "cartoon" , "tv" , "spain" , "mous" ,"teacher",
"shadmehr" , "king" , "queen" , "note" , "microphone" , "alert" , "warning",
"visitor" , "model"  , "country" , "state" , "style" , "keyword" , "handel"
]

const startBTN = document.getElementById("startGame"),
btnContainer = document.getElementById("gameBTNContainer")
btn0 = document.getElementById("0"),
btn1 = document.getElementById("1"),
btn2 = document.getElementById("2"),
btn3 = document.getElementById("3"),
btn4 = document.getElementById("4"),
btn5 = document.getElementById("5"),
btn6 = document.getElementById("6"),
btn7 = document.getElementById("7"),
btn8 = document.getElementById("8"),
word = document.getElementsByClassName('word'),
word0 = document.getElementsByClassName('word')[0],
word1 = document.getElementsByClassName('word')[1],
word2 = document.getElementsByClassName('word')[2],
word3 = document.getElementsByClassName('word')[3],
word4 = document.getElementsByClassName('word')[4],
word5 = document.getElementsByClassName('word')[5],
level = document.getElementById('level');
score = document.getElementById('score');

const userStatus = document.getElementById('userStatus');

let findIndexWordArray ,
randomWord,
lineCounter = 0,
style_left_percent = 0,
gameCountRepet = 0,
timerCount=0,
lastLine,
gameSpeed = 1000,
levelNum=1,
scoreNum = 0,
gameStatus = false;

let btnArrayValue = [];

window.onload = function () {
    btnContainer.style.display="none"
};


const play = ()=>{
    gameCountRepet = randomInteger(5 , 10);
    
    console.log("gameCountRepet" , gameCountRepet)


    if(gameStatus === false){
    var fiveMinutes = 60 * 6,
    display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
    }
    gameStatus = true;
    startBTN.style.display ="none";

    findIndexWordArray = randomInteger(1,50);
    randomWord = wordArray[findIndexWordArray];
    console.log(randomWord)
    
    
    // for( let i=1 ; btnArrayValue.length<= 8 ; i++){
    //     console.log(i)
    //     const rannum = randomInteger(1,50);
    //     const randword = wordArray[rannum]; 
    //     btnArrayValue.push(randword);
        
    //     let unique = [...new Set(btnArrayValue)];
    //     btnArrayValue = unique;
       
        
    // }
    // const findIndexBtn= randomInteger(1,9);
    // btnArrayValue[findIndexBtn] = randomWord;
    // console.log(btnArrayValue)
    fullyArray()

    const gameStartTimer = setInterval(()=>{
        let randNumber = randomInteger(0,8);
         let randomsWord = btnArrayValue[randNumber];
         if(lineCounter >= 0 && lineCounter <=5){
            lastLine = word0;
            word0.innerHTML = randomsWord;
            word0.style.left = style_left_percent * 15 + "%";
        };

        if(lineCounter === 5) style_left_percent = 0;
        if(lineCounter > 5 && lineCounter <= 10){
            lastLine = word1;
            clear(word0)
            word1.innerHTML = randomsWord;
            word1.style.left = style_left_percent * 15 + "%";
        }

        if(lineCounter === 10) style_left_percent = 0 ;
        if(lineCounter > 10 && lineCounter <= 15){
            lastLine = word2;
            clear(word1)
            word2.innerHTML = randomsWord;
            word2.style.left = style_left_percent * 15 + "%";
        }

        if(lineCounter === 15) style_left_percent = 0;
        if(lineCounter > 15 && lineCounter <= 20){
            lastLine = word3;
            clear(word2)
            word3.innerHTML = randomsWord;
            word3.style.left = style_left_percent * 15 + "%";
        }

        if(lineCounter === 20) style_left_percent = 0;
        if(lineCounter > 20 && lineCounter <= 25){
            lastLine = word4;
            clear(word3)
            word4.innerHTML = randomsWord;
            word4.style.left = style_left_percent * 15 + "%";
        }

        if(lineCounter === 25) style_left_percent = 0;
        if(lineCounter > 25 && lineCounter <= 30){
            lastLine = word5;
            clear(word4)
            word5.innerHTML = randomsWord;
            word5.style.left = style_left_percent * 15 + "%";
        }

        
        if(lineCounter == 30 ){
            lineCounter = 0;
            clear(word5);
            lastLine = word0;
        }
        lineCounter++;
        style_left_percent++;
        timerCount++;
        console.log(timerCount)

        if(timerCount == gameCountRepet){
            timerCount = 0;
            clearInterval(gameStartTimer);
            let lastshowCounter =0;
            lastLine.innerHTML = randomWord;
            const lastShow = setInterval(()=>{
                lastLine.innerHTML="";
                lastshowCounter++;
                if(lastShow === 1){
                    clearInterval(lastShow);
                    clearInterval(gameStartTimer); 
                    clear(lastLine)
                }
            },gameSpeed)
            
            btnContainer.style.display ="flex";
            btn0.innerHTML = btnArrayValue[0];
            btn0.value = btnArrayValue[0];
            btn1.innerHTML = btnArrayValue[1]
            btn2.innerHTML = btnArrayValue[2]
            btn3.innerHTML = btnArrayValue[3]
            btn4.innerHTML = btnArrayValue[4]
            btn5.innerHTML = btnArrayValue[5]
            btn6.innerHTML = btnArrayValue[6]
            btn7.innerHTML = btnArrayValue[7]
            btn8.innerHTML = btnArrayValue[8]
        }
    } , gameSpeed)




    
    // word.map((item,index) =>{
    //     item.innerHTML = btnArrayValue[index]
    // })
    
}
startBTN.addEventListener('click',play)



// word.map((item,index) =>{
//     item.addEventListener('click',selected(item.innerHTML))
// })


// select btn 

    function selected (value){
        console.log(value)
        if(randomWord === value){
            console.log("win");
            scoreNum++;
            score.innerHTML = scoreNum;
            if(score === 3 ){
                levelNum++;
                level.innerHTML = levelNum;
                gameSpeed = 700
            }
            if(score === 6){
                levelNum++;
                level.innerHTML = levelNum;
                gameSpeed = 500
            }
            if(score === 10){
                levelNum++;
                level.innerHTML = levelNum;
                gameSpeed = 300
            }

            stausHAndler("win")
        }else{
            console.log("lose")
            stausHAndler("lose")
        }
        fullyArray()
        play();
    }

    btn0.addEventListener('click' , ()=> selected(btn0.innerHTML))
    btn1.addEventListener('click' , ()=> selected(btn1.innerHTML))
    btn2.addEventListener('click' , ()=> selected(btn2.innerHTML))
    btn3.addEventListener('click' , ()=> selected(btn3.innerHTML))
    btn4.addEventListener('click' , ()=> selected(btn4.innerHTML))
    btn5.addEventListener('click' , ()=> selected(btn5.innerHTML))
    btn6.addEventListener('click' , ()=> selected(btn6.innerHTML))
    btn7.addEventListener('click' , ()=> selected(btn7.innerHTML))
    btn8.addEventListener('click' , ()=> selected(btn8.innerHTML))
// helper functions
function randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

const clear = (element)=>{
element.style.left = 0;
element.innerHTML =''
}

const fullyArray = ()=>{
    btnArrayValue = [];
    for( let i=1 ; btnArrayValue.length<= 8 ; i++){
        const rannum = randomInteger(1,50);
        const randword = wordArray[rannum]; 
        btnArrayValue.push(randword);
        
        let unique = [...new Set(btnArrayValue)];
        btnArrayValue = unique;
       
        
    }
    const findIndexBtn= randomInteger(0,8);
    btnArrayValue[findIndexBtn] = randomWord;
    console.log(btnArrayValue)
}

const stausHAndler = (value)=>{
    userStatus.innerHTML = value;

    setTimeout(()=>{
        userStatus.innerHTML = '';
    },1500)
}