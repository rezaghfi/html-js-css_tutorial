section.innerHTML = "Learning DOM in javasript";
// dom child
paragh = document.createElement("p")
paragh.innerHTML = "new appending child to main div"
//console.log(paragh);
main.appendChild(paragh)

// event handler
btn1 = document.createElement("button")
btn1.innerHTML = "click me"
main.appendChild(btn1)
btn1.onclick = function(){
  if(btn1.innerHTML == "click me")
    btn1.innerHTML = "unclick me"
  else if(btn1.innerHTML == "unclick me")
    btn1.innerHTML = "click me"
}
