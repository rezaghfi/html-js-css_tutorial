// alert("صفحه جاوا اسکریپت")

document.getElementById("s").onsearch = function(){
  function3()
}

var hasan= true
function function1(){
  // dom 
  var paragraph = document.getElementById("paragh")
  if (hasan == true){
    paragraph.style.color = "red"
    hasan = false
  }
  else{
    paragraph.style.color = "green"
    hasan = true
  }
}

function fucntion2(){
  console.log("hello")
}

function function3(){
  console.log("searching")
}