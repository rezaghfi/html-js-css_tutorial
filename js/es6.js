section.innerHTML = "Learning ES6 in javasript";
// object.assign()
const obj1 = {
  a: 9,
  b: 3,
  c: 4,
};

const obj2 = Object.assign({ c: 5, d: 6 }, obj1);
console.log(obj2.c, obj2.d);

// rest parameter
function magic(...nums) {
  let sum = 0;
  nums.filter((n) => n % 2 == 0).map((el) => (sum += el));
  return sum;
}
console.log(magic(1, 2, 3, 4, 5, 6));
function sumArray(...arr) {
  let sum = 0;
  for (const num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumArray(1, 2, 3, 4, 5, 6));

// class defination
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  getX() {
    return this.x;
  }
  getY() {
    return this.y;
  }
  setX(x) {
    this.x = x;
  }
  setY(y) {
    this.x = y;
  }
  //static method
  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}

var p1 = new Point(1, 4);
document.write("Point p1 = (", p1.getX(), ",", p1.getY(), ")");
var p2 = new Point(5, 6);
console.log(Point.distance(p1, p2));

// class inheritance

class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  talk() {
    document.write("<br>"+this.firstName, " ", this.lastName, " is talking");
  }
}

class Man extends Human{
  // overriding
  talk(){
    document.write("<br>"+this.firstName," ",this.lastName, " is a man that talk about himself");
  }
}

let h1 = new Human("human","humani");
h1.talk()
let m1 = new Man("reza","gholamalitabar");
m1.talk()

// MAP
let map = new Map([['k1','v1'],['k2','v2']]);
console.log(map.size);
map.set('k3','v3')
console.log(map.get('k3'));
console.log(map.keys());
console.log(map.has('k1'));
map.delete('k1');
console.log(map.get('k1'));
console.log(map.values());
console.log(map.entries());

//SET
let set = new Set([1,2,4,5,6,1,2,4])
console.log(set.entries());
set.add(3).add(7).add(45)
console.log(set.values());
console.log(set.keys());

// setTimeout
setTimeout(function(){
  console.log("Work 1");
  setTimeout(function(){
    console.log("Work 2");
  }, 1000);
},1000);
console.log("End");
