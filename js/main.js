// this is java script
/**
 * this is main file.
 */
console.log("start main javascript");
// variable
var x = 100;
document.write(x);
// data types: number, strings, arrays
var num = 11;
var price = 553.54;
num2 = 15;
var firstname = "reza";
var lastname = "gholamalitabar";
var isActive = true;
var isHoliday = false;
document.write("<hr>" + firstname + " " + lastname);
document.write("<hr>" + isActive);

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
varable = (10 > 5) ? "10 greater than 5" : "5 smaller than 10"
document.write("<hr>" + varable)