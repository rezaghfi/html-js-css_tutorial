// حالت مساوی بازی بالا جدول چاپ شود بازی مساوی شد و اینکه روی خانه پر خطا بده

let msg = document.getElementById("text")
let btn0 = document.getElementById("btn0")
let btn1 = document.getElementById("btn1")
let btn2 = document.getElementById("btn2")
let btn3 = document.getElementById("btn3")
let btn4 = document.getElementById("btn4")
let btn5 = document.getElementById("btn5")
let btn6 = document.getElementById("btn6")
let btn7 = document.getElementById("btn7")
let btn8 = document.getElementById("btn8")
let restartBtn = document.getElementById("restart");

let turn = "X";
let row = 3;
let col = 3;
let map = [];
let h = 0
for (i = 0; i < row; i++) {
  map[i] = [];
  for(j = 0; j < col ; j++){
    map[i][j] = h++
    // console.log(map[i][j])
  }
}


function btn0E(){
  if(btn0.innerHTML == ""){
    if (turn == "X"){
      btn0.innerHTML = "X"
      turn = "O"
      map[0][0] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn0.innerHTML = "O"
      turn = "X"
      map[0][0] = "O"
      checkwinner("O")
    }
  }
}
function btn1E(){
  if(btn1.innerHTML == ""){
    if (turn == "X"){
      btn1.innerHTML = "X"
      turn = "O"
      map[0][1] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn1.innerHTML = "O"
      turn = "X"
      map[0][1] = "O"
      checkwinner("O")
    }
  }
}
function btn2E(){
  if(btn2.innerHTML == ""){
    if (turn == "X"){
      btn2.innerHTML = "X"
      turn = "O"
      map[0][2] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn2.innerHTML = "O"
      turn = "X"
      map[0][2] = "O"
      checkwinner("O")
    }
  }
}
function btn3E(){
  if(btn3.innerHTML == ""){
    if (turn == "X"){
      btn3.innerHTML = "X"
      turn = "O"
      map[1][0] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn3.innerHTML = "O"
      turn = "X"
      map[1][0] = "O"
      checkwinner("O")
    }
  }
}
function btn4E(){
  if(btn4.innerHTML == ""){
    if (turn == "X"){
      btn4.innerHTML = "X"
      turn = "O"
      map[1][1] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn4.innerHTML = "O"
      turn = "X"
      map[1][1] = "O"
      checkwinner("O")
    }
  }
}
function btn5E(){
  if(btn5.innerHTML == ""){
    if (turn == "X"){
      btn5.innerHTML = "X"
      turn = "O"
      map[1][2] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn5.innerHTML = "O"
      turn = "X"
      map[1][2] = "O"
      checkwinner("O")
    }
  }
}
function btn6E(){
  if(btn6.innerHTML == ""){
    if (turn == "X"){
      btn6.innerHTML = "X"
      turn = "O"
      map[2][0] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn6.innerHTML = "O"
      turn = "X"
      map[2][0] = "O"
      checkwinner("O")
    }
  }
}
function btn7E(){
  if(btn7.innerHTML == ""){
    if (turn == "X"){
      btn7.innerHTML = "X"
      turn = "O"
      map[2][1] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn7.innerHTML = "O"
      turn = "X"
      map[2][1] = "O"
      checkwinner("O")
    }
  }
}
function btn8E(){
  if(btn8.innerHTML == ""){
    if (turn == "X"){
      btn8.innerHTML = "X"
      turn = "O"
      map[2][2] = "X"
      checkwinner("X")
    }else if(turn == "O"){
      btn8.innerHTML = "O"
      turn = "X"
      map[2][2] = "O"
      checkwinner("O")
    }
  }
}


function checkwinner(t){
  flag = false
  // بررسی سطر ها
  for(i = 0; i < row; i++){
    if(map[i][0] == map[i][1] && map[i][1] == map[i][2]){
     flag =true
    }
  }
  //بررسی ستون ها
  for ( j = 0 ; j <col ; j++){
    if(map[0][j] == map[1][j] && map[1][j] == map [2][j]){
      flag = true
    }
  }
  // بررسی قطر اصلی
  if(map[0][0] == map[1][1] && map[1][1] == map [2][2]){
    flag =true
  }
  // قطر فرعی
  if(map[0][2] == map[1][1] && map[1][1] == map [2][0]){
    flag =true
  }
  if(flag == true){
    msg.innerHTML = t + " win"
    btn0.disabled = true
    btn1.disabled = true
    btn2.disabled = true
    btn3.disabled = true
    btn4.disabled = true
    btn5.disabled = true
    btn6.disabled = true
    btn7.disabled = true
    btn8.disabled = true
  }  
}

function hasan(){
  location.reload()
}
