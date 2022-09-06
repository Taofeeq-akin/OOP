'use strict';
/*
// Constructor Function
const Person = function (firstName, birthYear) {
  // Intance properties
  this.firstName = firstName;
  this.birthYear = birthYear;
};
const ola = new Person('Ola', 2015);
console.log(ola);
const tee = new Person('Tee', 2013);
console.log(tee);

const jack = 'Jay';
console.log(ola instanceof Person);
console.log(jack instanceof Person);

// Prototypes : just like pushing inti the parent through the child
Person.prototype.CalAge = function () {
  console.log(2020 - this.birthYear);
};
ola.CalAge();
tee.CalAge();

console.log(ola.__proto__);
console.log(ola.__proto__ === Person.prototype);
console.log(jack.__proto__ === Person.prototype);

// To check if its a prototype  (if person is a prototype to ola : Prototype is the parent while object like child)
console.log(Person.prototype.isPrototypeOf(ola));

// .prototypeOfLinkedObjects

Person.prototype.species = 'Home Sapiens'; // Using this to create
console.log(ola); // will inherit species from ot prototype same as calAge function
console.log(ola.species, tee.species);

console.log(ola.hasOwnProperty('firstName'));

// Effective of prototype chain
console.log(ola.__proto__); // Prototype of ola
//  Object.prototype (top of prototype) 
console.log(ola.__proto__.__proto__); // prototype object
console.log(ola.__proto__.__proto__.__proto__);

// Working with Array with prototype
const arr = [3, 5, 2, 6, 9];
console.log(arr.__proto__); // Will give us approach to Array method
console.log(arr.__proto__.__proto__); // will give ppt available for object which is from object to object.prototype
*/

/*
// Coding Challenge 1
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acc = function () {
  this.speed += 10;
  console.log(`When apply accelerator = ${this.speed}`);
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`When apply brake = ${this.speed}`);
};

const data1 = new Car('BMW', 120);
console.log(data1);
data1.acc();
data1.acc();
data1.brake();
data1.acc();

const data2 = new Car('Mercedes', 95);
console.log(data2);
data2.acc();
data2.brake();
*/
/*
// ES6 Classes
//  Using class declaration
class PersonCl {
  // constructor(firstName, birthYear) {
  //   this.firstName = firstName;
  //   this.birthYear = birthYear;
  // }

  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  // instance Method
  calAge() {
    console.log(2030 - this.birthYear);
  }

  // Trying validation using setters
  // Creating a setter for a property name that already exist
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  // if we get jessica.fullName the name wont be read so we nedd to set a getter also

  get fullName() {
    return this._fullName;
  }

  // Static Method
  static hey() {
    console.log('How you over there 🖐')
  }
}

const jessica = new PersonCl('Jessica Davis', 2002);
jessica.calAge();
console.log(jessica.fullName);

PersonCl.hey()

// But the classes inside are not prototype of themselve but are prototype of the object
console.log(jessica.__proto__ === PersonCl.prototype);

// Getters and Setters
const account = {
  owner: 'Taofeeq',
  movement: [300, 550, 430, 200],

  get latest() {
    return this.movement.slice(-1).pop();
  },

  set latest(mov) {
    return this.movement.push(mov);
  },
};

console.log(account.latest);
account.latest = 700;
console.log(account.movement);
console.log(account.latest)

account.latest = 500;
console.log(account.movement);
*/

/*
// Using Object.create
const PersonProto = {
  calAge() {
    console.log(2030 - this.birthYear);
  },
};

const steven = Object.create(PersonProto);
// Doing creating the child object in this manner is not really okay
steven.name = 'Steven';
steven.birthYear = 2017;
steven.calAge();

console.log(steven.__proto__);

// We go do it in this way instead
const NewPersonProto = {
  calAge() {
    console.log(2030 - this.birthYear);
  },

  init(name, birthYear) {
    this.name = name;
    this.birthYear = birthYear;
  },
};

const niyi = Object.create(NewPersonProto);
niyi.init('Tee', 2020);
niyi.calAge();
*/
/*
// Coding Challenge 2 : Re-creating challenge 1
class CarSpeed {
  constructor(carname, speed) {
    this.carname = carname;
    this.speed = speed;
  }

  acc() {
    this.speed += 10;
    console.log(`When apply accelerator = ${this.speed}`);
  }

  brake() {
    this.speed -= 5;
    console.log(`When apply brake = ${this.speed}`);
  }

  get speedUS() {
    this.speed = this.speed / 1.6;
    console.log(`${this.speed} mi/h`);
  }

  set speedUS(kmh) {
    this.speed = kmh * 1.6;
    console.log(this.speed);
  }
}

const bmw = new CarSpeed('BMW', 120);
bmw.acc();
bmw.acc();
bmw.brake();
bmw.speedUS;
bmw.speedUS = 120;

bmw.acc();
*/
/*
// Inheritance between Classes: Constructor Functions
const Person = function (firstName, birthYear) {
  this.firstName = firstName;
  this.birthYear = birthYear;
};

Person.prototype.CalAge = function () {
  console.log(2020 - this.birthYear);
};

// Student is the child of person and inherit from person class
const Student = function (firstName, birthYear, course) {
  Person.call(this, firstName, birthYear);
  this.course = course;
};

// Linking prototypes
Student.prototype = Object.create(Person.prototype);

Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and i study ${this.course}`);
};

const mike = new Student('Mike', 2005, 'Computer Science');
mike.introduce();
mike.CalAge();

console.log(mike.__proto__);
console.log(mike.__proto__.__proto__);

console.log(mike instanceof Student);
console.log(mike instanceof Person);
console.log(mike instanceof Object);

Student.prototype.constructor = Student;
console.dir(Student.prototype.constructor);
*/

// Coding Challenge 3
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};

Car.prototype.acc = function () {
  this.speed += 20;
  this.charge --;
  console.log(
    `${this.make} is going at ${this.speed}, with a charge of ${Math.trunc(
      this.charge
    )}%`
  );
};

Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`When apply brake = ${this.speed}`);
};

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

// Linking prototypes
EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};

const tesla = new EV('Tesla', 120, 23);
tesla.chargeBattery(90)

tesla.acc();
tesla.acc();
tesla.brake();
