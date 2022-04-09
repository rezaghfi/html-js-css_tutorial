var num = document.getElementById("number").innerHTML

function add(){
  document.getElementById("number").innerHTML = num++
}

function sub(){
  document.getElementById("number").innerHTML = num--
}

document.getElementById("btn3").onclick = function test(){
  document.getElementById("test").innerHTML = "your press * button"
}

document.getElementById("demo").addEventListener("click",demoFunc)

function demoFunc(){
  document.getElementById("demo").innerHTML = "ana demo"
}

document.getElementById("hidden").addEventListener("click",function hidden(){
  document.getElementById("hidden").style.opacity = 0;
})

btn4.onclick = function(){
  test.innerHTML = "you are click on / button"
}