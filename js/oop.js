// object with just one instance in javascript
var Person = {
  // property
  name: "person",
  age: 20,
  favColor: "green",
  height: 190,
};

Person.x = function(){
  document.write("ana aditional method in person object <br>")
};
var name = Person.name;
var age = Person["age"];
document.write(name + " age is " + age + "<br>");
var Class = {
  property: "property1",
};
document.write(
  Class.property + " length is: " + Class.property.length + "<br>"
);
Person.x()
//!!constructor
// object has any instance with constructor
function Human(name, age, generic, nationalCode) {
  this.name = name;
  this.age = age;
  this.generic = generic;
  this.nationalCode = nationalCode;
  // method with body in object
  this.eat = function () {
    document.write(this.name + " eat <br>");
  };
  // method without body in object
  this.x = run;
}
function run() {
  document.write("ana run <br>");
}

var reza = new Human("reza", 27, "male", 4980181120);
document.write(
  reza.name + " age is " + reza.age + " and generic is " + reza.generic + "<br>"
);
reza.eat();
reza.x();
reza.rezaFunc = function(){
  document.write("ana reza additional function")
};
reza.rezaFunc()
var narges = new Human("narges", 25, "female", 2050747918);
document.write(
  narges.name +
    " age is " +
    narges.age +
    " and generic is " +
    narges.generic +
    "<br>"
);
narges.eat();

// Arrays
var courses = new Array("HTML", "CSS", "JS")
courses[2] = "C++"
document.write(courses[12])
var lessons = new Array(4)
lessons[0] = "intro"
document.write(lessons[3])
document.write(lessons[12])
// array with dynamics length
var boys = new Array();
boys[0] = "reza"
boys[1] = "reza"
boys[2] = "reza"
boys[3] = "reza"
var girls =["narges", "narges", "narges"]
document.write("girls array length is: "+girls.length)
