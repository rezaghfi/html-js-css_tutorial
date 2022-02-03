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
nationalcode = "4980181120";
var dateOfBrith = new Date();
dateOfBrith.setHours(12, 45, 23);
var working = true;
document.write("<hr><h1>Data Types:</h1><br>" + firstname + " " + lastname);

// math operators
x = 10 * 5;
x = 10 - 9;
x = 123 / 6;
x = 56 % 3;
x = x++; // x = x and then x+1
document.write("<hr>" + x);
x = ++x; // x = x+1
document.write("<hr>" + x);
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
document.write("<hr>" + "logical operators:and && ,or || ,not !");
varable = 10 > 5 ? "10 greater than 5" : "5 smaller than 10";
document.write("<hr>" + varable);
