words = ["red","blue","yellow","green","orange","aqua"];
score=0;
level=1;
speed=2;
newWords=["","","","",""];
function show() {
    bottonbox.style.display = "flex";
}
f=12000
function mainsuccess() {
    main.style.backgroundColor = "greenyellow";
    setInterval(() => {
        main.style.backgroundColor = "rgb(250, 250, 115)"
    }, 2000);
}
function mainwrong() {
    main.style.backgroundColor = "orangered";
    setInterval(() => {
        main.style.backgroundColor = "rgb(250, 250, 115)"
    }, 2000);
}
f = 12000;
function start(){
    clearInterval()
    bottonbox.style.display = "none";
    var showbut = setInterval(show, f);
    randomId = Math.floor(Math.random(1)*6);
    randomWords = words[randomId];
    for(i=0;i < 6;i++){
        randomColumn = Math.ceil(Math.random(1)*4);
        randomMargin = Math.ceil(Math.random(1)*80);
        if(randomId != i){
            it=document.createElement("p");
            if(randomId >i){
                c=i;
            }
            else if(randomId < i){
                c=i-1;
            }
            newWords[c] = words[i];
            it.innerHTML=newWords[c];
            it.style.left = randomMargin+"%";
            it.style.position = "absolute";
            it.style.bottom = "-20px";
            it.className = "word";
            it.style.animationDelay = 2*c+"s";
        }
        if(randomColumn==1){
            show1.appendChild(it);
        }
        if(randomColumn==2){
            show2.appendChild(it);
        }
        if(randomColumn==3){
            show3.appendChild(it);
        }
        if(randomColumn==4){
            show4.appendChild(it);
        }
    }
    select1.onclick = function() {
        ans=1
        if(select1.innerHTML == randomWords){
            answer = true ;
            
            score+=1;
            mainsuccess();
        }
        else{
            answer = false ;
            mainwrong();
            score=0;
            level=0;
        }
        scoree.innerHTML = score;
        for(i=0;i<5;i++){
            if(document.getElementById("show1").children.length !=0 || document.getElementById("show2").children.length !=0 || document.getElementById("show3").children.length !=0 || document.getElementById("show4").children.length !=0){
                for(i=0;i<document.getElementById("show1").children.length;i++){
                    var m = document.querySelector("#show1 .word");
                    show1.removeChild(m);
                }
                for(j=0;j<document.getElementById("show2").children.length;j++){
                    var m = document.querySelector("#show2 .word");
                    show2.removeChild(m);
                }
                for(n=0;n<document.getElementById("show3").children.length;n++){
                    var mm = document.querySelector("#show3 .word");
                    show3.removeChild(mm);
                }
                for(z=0;z<document.getElementById("show4").children.length;z++){
                    var mm = document.querySelector("#show4 .word");
                    show4.removeChild(mm);
                }
            }
            else{}
            start();
        }
    }
            
    select2.onclick = function() {
        ans=1
        if(select2.innerHTML == randomWords){
            answer = true ;
            score+=1;
            mainsuccess();
        }
        else{
            answer = false ;
            mainwrong();
            score=0;
            level=0;
        }
        scoree.innerHTML = score;
        levell.innerHTML=level;
        for(i=0;i<5;i++){
            if(document.getElementById("show1").children.length !=0 || document.getElementById("show2").children.length !=0 || document.getElementById("show3").children.length !=0 || document.getElementById("show4").children.length !=0){
                for(i=0;i<document.getElementById("show1").children.length;i++){
                    var m = document.querySelector("#show1 .word");
                    show1.removeChild(m);
                }
                for(j=0;j<document.getElementById("show2").children.length;j++){
                    var m = document.querySelector("#show2 .word");
                    show2.removeChild(m);
                }
                for(n=0;n<document.getElementById("show3").children.length;n++){
                    var mm = document.querySelector("#show3 .word");
                    show3.removeChild(mm);
                }
                for(z=0;z<document.getElementById("show4").children.length;z++){
                    var mm = document.querySelector("#show4 .word");
                    show4.removeChild(mm);
                }
            }
            else{}
        }
        start();
    }
    select3.onclick = function() {
        ans=1
        if(select3.innerHTML == randomWords){
            answer = true ;
            score+=1;
            mainsuccess();
        }
        else{
            answer = false ;
            mainwrong();
            score=0;
            level=0;
        }
        scoree.innerHTML = score;
        levell.innerHTML=level;
        for(i=0;i<5;i++){
            if(document.getElementById("show1").children.length !=0 || document.getElementById("show2").children.length !=0 || document.getElementById("show3").children.length !=0 || document.getElementById("show4").children.length !=0){
                for(i=0;i<document.getElementById("show1").children.length;i++){
                    var m = document.querySelector("#show1 .word");
                    show1.removeChild(m);
                }
                for(j=0;j<document.getElementById("show2").children.length;j++){
                    var m = document.querySelector("#show2 .word");
                    show2.removeChild(m);
                }
                for(n=0;n<document.getElementById("show3").children.length;n++){
                    var mm = document.querySelector("#show3 .word");
                    show3.removeChild(mm);
                }
                for(z=0;z<document.getElementById("show4").children.length;z++){
                    var mm = document.querySelector("#show4 .word");
                    show4.removeChild(mm);
                }
            }
            else{}
        }
        start();
    }
    select4.onclick = function() {
        ans=1
        if(select4.innerHTML == randomWords){
            answer = true ;
            score+=1;
            mainsuccess();
        }
        else{
            answer = false ;
            mainwrong();
            score=0;
            level=0;
        }
        scoree.innerHTML = score;
        levell.innerHTML=level;
        for(i=0;i<5;i++){
            if(document.getElementById("show1").children.length !=0 || document.getElementById("show2").children.length !=0 || document.getElementById("show3").children.length !=0 || document.getElementById("show4").children.length !=0){
                for(i=0;i<document.getElementById("show1").children.length;i++){
                    var m = document.querySelector("#show1 .word");
                    show1.removeChild(m);
                }
                for(j=0;j<document.getElementById("show2").children.length;j++){
                    var m = document.querySelector("#show2 .word");
                    show2.removeChild(m);
                }
                for(n=0;n<document.getElementById("show3").children.length;n++){
                    var mm = document.querySelector("#show3 .word");
                    show3.removeChild(mm);
                }
                for(z=0;z<document.getElementById("show4").children.length;z++){
                    var mm = document.querySelector("#show4 .word");
                    show4.removeChild(mm);
                }
            }
            else{}
        }
        start();
    }
    select5.onclick = function() {
        ans=1
        if(select5.innerHTML == randomWords){
            answer = true ;
            score+=1;
            mainsuccess();
        }
        else{
            answer = false ;
            mainwrong();
            score=0;
            level=0;
        }
        scoree.innerHTML = score;
        levell.innerHTML=level;
        for(i=0;i<5;i++){
            if(document.getElementById("show1").children.length !=0 || document.getElementById("show2").children.length !=0 || document.getElementById("show3").children.length !=0 || document.getElementById("show4").children.length !=0){
                for(i=0;i<document.getElementById("show1").children.length;i++){
                    var m = document.querySelector("#show1 .word");
                    show1.removeChild(m);
                }
                for(j=0;j<document.getElementById("show2").children.length;j++){
                    var m = document.querySelector("#show2 .word");
                    show2.removeChild(m);
                }
                for(n=0;n<document.getElementById("show3").children.length;n++){
                    var mm = document.querySelector("#show3 .word");
                    show3.removeChild(mm);
                }
                for(z=0;z<document.getElementById("show4").children.length;z++){
                    var mm = document.querySelector("#show4 .word");
                    show4.removeChild(mm);
                }
            }
            else{}
        }
        start();
    }
    select6.onclick = function() {
        ans=1
        if(select6.innerHTML == randomWords){
            answer = true ;
            score+=1;
            mainsuccess();
        }
        else{
            answer = false ;
            score=0;
            level=0;
            mainwrong();
        }
        scoree.innerHTML = score;
        levell.innerHTML=level;
        for(i=0;i<5;i++){
            if(document.getElementById("show1").children.length !=0 || document.getElementById("show2").children.length !=0 || document.getElementById("show3").children.length !=0 || document.getElementById("show4").children.length !=0){
                for(i=0;i<document.getElementById("show1").children.length;i++){
                    var m = document.querySelector("#show1 .word");
                    show1.removeChild(m);
                }
                for(j=0;j<document.getElementById("show2").children.length;j++){
                    var m = document.querySelector("#show2 .word");
                    show2.removeChild(m);
                }
                for(n=0;n<document.getElementById("show3").children.length;n++){
                    var mm = document.querySelector("#show3 .word");
                    show3.removeChild(mm);
                }
                for(z=0;z<document.getElementById("show4").children.length;z++){
                    var mm = document.querySelector("#show4 .word");
                    show4.removeChild(mm);
                }
            }
            else{}
        }
        start();
    }
    bottonbox.style.display = "none";
    level = Math.floor((score / 3)+1);
    if(speed <= 0.5){
        speed = 0.5;
        level = 7;
    }
    else{
        speed = 2 - ((level -1)*0.25);
    }
    $(document).ready(function(){
        $(".word").css("animationDuration", speed +"s");
    });
    levell.innerHTML = level;
    s= (speed * 6000)
}
start();
