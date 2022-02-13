// this is java script
/**
 * this is main file.
 */
console.log("start main javascript");
// variable
var variable = 100;
// data types: number, strings, arrays
var firstName = "Reza";
var lastName = "Gholamalitabar";
var age = 11;
var salary = 55755540;
nationalCode = "4980181120";
var dateOfBrith = new Date();
dateOfBrith.setHours(12, 45, 23);
var working = true;
document.write(
  "<hr><h1>Data Types:</h1><br>" +
    ", firstName:" +
    firstName +
    ", lastName:" +
    lastName +
    ", Age:" +
    age +
    ", Date Of Birthday:" +
    dateOfBrith +
    "National Code:" +
    nationalCode +
    "Are you working haes? :" +
    working
);

// math operators
x = 10 * 5;
x = 10 - 9;
x = 123 / 6;
x = 56 % 3;
x = x++; // x = x and then x+1
x = ++x; // x = x+1
x = x--;

// assignment Operators
y = 2;
x = y;
x += y;
x -= y;
x *= y;
x /= y;
x %= y;

// comparison operators
num = 10;
console.log(num == 8); // outputs false
console.log(5 == 10);
console.log(5 === 10); // equal and same type
console.log(5 != 10);
console.log(5 !== 10); // not equal and same type
console.log(10 > 5);
console.log(5 >= 10);
console.log(5 < 10);
console.log(5 <= 10);

// logical operators
document.write("<hr><h1>logocal operators:</h1><br>" + "and && ,or || ,not !");
varable = 10 > 5 ? "10 greater than 5" : "5 smaller than 10";
document.write("<br>" + varable);

// string operators
var mystring1 = "I am learning ";
var mystring2 = "javasctript with sololearn.";
document.write("<hr> <h1>string opertor:</h1> <br>" + mystring1 + mystring2);

// if statement
document.write("<hr><h1>if statement</h1><br>");
var temp1 = 10;
var temp2 = "10";
if ((temp1 = temp2)) document.write("temp1 is equal to temp2");
else if (temp1 < temp2) document.write("temp1 is smaller than temp2");
else document.write("temp1 is greater than temp2");

// switch statement
document.write("<hr><h1>switch statement</h2> <br> today is: ");
var day = 2;
switch (day) {
  case 1:
    document.write("saturday");
    break;
  case 2:
    document.write("sunday");
    break;
  case 1:
    document.write("monday");
    break;
  case 1:
    document.write("tuesday");
    break;
  case 1:
    document.write("wednesday");
    break;
  default:
    document.write("Another day");
}

// the for loop
document.write("<hr><h1>for loop</h1><br>");
for (i = 0; i < 10; i += 2) {
  document.write(i + "<br>");
}

//the while looop
document.write("<hr><h1>while loop</h1><br>");
var j = 0;
while (j <= 10) {
  document.write(j + "<br>");
  j++;
}

//the do while loop
document.write("<hr><h1>do while loop</h1><br>");
var h = 0;
do {
  document.write(h + "<br>");
  h++;
} while (h < 0);

//break and continue
document.write("<hr><h1> the break in loop</h1><br>");
for (i = 0; i < 10; i++) {
  if (i == 5) break;
  document.write(i + "<br>");
}
document.write("<hr><h1> the continue in loop</h1><br>");
for (i = 0; i < 10; i++) {
  if (i == 5) continue;
  document.write(i + "<br>");
}

// calling function
document.write("<hr><h1>calling function</h1><br>");
function myFunction() {
  document.write("ana myFunction function<br>");
}
myFunction();
myFunction();

//function parameters
function sayHello(name) {
  document.write("Hi " + name + "<br>");
}

// multiple parameters and //! can not overloaded function
function sayHello(name, age) {
  document.write("Hi " + name + "your age is " + age + "<br>");
}

sayHello("reza");
sayHello("hasan");
sayHello("narges");

//function return 
// calculatir
function sum(a , b){return a + b}
function sub(a, b){return a - b}
function div(a , b){return a / b}
function mul(a , b){return a*b}
a =12 , b = 12
document.write( a + " + "+b+" = "+sum(a,b)+ "<br>")
document.write( a + " - "+b+" = "+sub(a,b)+ "<br>")
document.write( a + " * "+b+" = "+mul(a,b)+ "<br>")
document.write( a + " / "+b+" = "+div(a,b)+ "<br>")
