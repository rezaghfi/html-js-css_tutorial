// object in javascript
var person = {
  // property
  name: "person",
  age: 20,
  favColor: "green",
  height: 190,
  person: function(){
   document.write("ana person constructor")
  },
};
var name = person.name;
var age = person["age"];
document.write(name + " age is " + age + "<br>");

var object = {
  property: "property1",
};

document.write(object.property + " length is: " + object.property.length + "<br>");

var reza = new person()
document.write(reza.name + " age is " + reza.age + "<br>");
