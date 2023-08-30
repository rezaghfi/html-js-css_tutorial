var input1;
var input2;
var result;
var operator;

function n1(){ 
  document.getElementById('display').value += 1 
}
function n2(){ 
  document.getElementById('display').value += 2
}
function n3(){ 
  document.getElementById('display').value += 3 
}
function n4(){ 
  document.getElementById('display').value += 4 
}
function n5(){ 
  document.getElementById('display').value += 5 
}
function n6(){ 
  document.getElementById('display').value += 6 
}
function n7(){ 
  document.getElementById('display').value += 7 
}
function n8(){ 
  document.getElementById('display').value += 8 
}
function n9(){ 
  document.getElementById('display').value += 9 
}
function n0(){ 
  document.getElementById('display').value += 0
}
function n0(){ 
  document.getElementById('display').value += 0
}
// operators
function sum(){ 
  input1 = parseFloat(document.getElementById('display').value)
  operator = '+'
  document.getElementById('display').value = ''
}
function sub(){
  input1 = parseFloat(document.getElementById('display').value)
  operator = '-'
  document.getElementById('display').value = ''
}
function div(){ 
  input1 = parseFloat(document.getElementById('display').value)
  operator = '/'
  document.getElementById('display').value = ''
}
function mul(){ 
  input1 = parseFloat(document.getElementById('display').value)
  operator = '*'
  document.getElementById('display').value = ''
}
function p(){ 
  document.getElementById('display').value += '.'
}
function c(){ 
  document.getElementById('display').value = ""
}
function eql(){ 
  input2 = parseFloat(document.getElementById('display').value)
  if(operator == '+')
    result = input1 + input2
  else if(operator == '-')
    result = input1 - input2
  else if(operator == '*')
    result = input1 * input2
  else if(operator == '/')
    result = input1 / input2

document.getElementById('display').value = result
}