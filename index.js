class Employee {
  constructor(name, salary, experienceYears) {
    this.name = name;
    this.salary = salary;
    this.experienceYears = experienceYears;
  }

  checkSalary() {
    console.log(this.salary);
  }
  getEmployeeInformation() {
    console.log(
      `Employee info: ${this.name}, ${this.experienceYears} year(s) of experience, ${this.salary}`
    );
  }
}

let Jason = new Employee("Jason", "700,000", 1);
let Parul = new Employee("Parul", "1,000,000", 4);
let John = new Employee("John", "780,000", 8);

Jason.getEmployeeInformation();
Parul.getEmployeeInformation();
John.getEmployeeInformation();

// Create a class called "Person" that has properties for name, age, and occupation. Add a method called "introduce" that logs a message to the console introducing the person and their occupation.

class Person {
  constructor(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;
  }
  introduce() {
    console.log(
      `Hello, my name is ${this.name} and I am a ${this.occupation}.`
    );
  }
}

let person1 = new Person("Jason", 29, "Gemologist");
let person2 = new Person("Parul", 27, "Software Engineer at Amazon!!!!");
let person3 = new Person("Tony", 34, "Astronaught");

person1.introduce();
person2.introduce();
person3.introduce();

// Create a class called "Animal" that has properties for name, species, and sound. Add a method called "makeSound" that logs the animal's sound to the console.

class Animal {
  constructor(name, species, sound) {
    this.name = name;
    this.species = species;
    this.sound = sound;
  }
  makeSound() {
    console.log(
      `This ${this.name} is from the ${this.species} species. It makes a ${this.sound} sound.`
    );
  }
}
let animal1 = new Animal("Akita", "Canis lupus familiaris", "woof woof");
let animal2 = new Animal("Black Panther", "Felis fusca", "meow");
let animal3 = new Animal("Poison Dart Frog", "Dendrobatidae", "ribbit");

animal1.makeSound();
animal2.makeSound();
animal3.makeSound();

// Create a class called "Book" that has properties for title, author, and number of pages. Add a method called "read" that logs a message to the console indicating that the book has been read.

class Book {
  constructor(title, author, totalPages) {
    this.title = title;
    this.author = author;
    this.pages = totalPages;
  }
  read() {
    console.log(
      `You have finished reading all ${this.pages} pages of ${this.title} by ${this.author}.`
    );
  }
}
let book1 = new Book("Principles", "Ray Dalio", 592);
let book2 = new Book(
  "A Mind For Numbers: How to Excel at Math and Science",
  "Barbara Oakley",
  332
);
let book3 = new Book("The Creative Act: A Way of Being", "Rick Rubin", 432);

book1.read();
book2.read();
book3.read();
// Create a class called "Car" that has properties for make, model, and year. Add a method called "start" that logs a message to the console indicating that the car has been started.

class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  start() {
    console.log(
      `Time to start up your brand new ${this.year} ${this.make} ${this.model}`
    );
  }
}

let car1 = new Car("Porsche", "911 Turbo", 2024);
car1.start();

// Create a class called "Shape" that has properties for width and height. Add methods called "getArea" and "getPerimeter" that calculate and return the shape's area and perimeter.

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    console.log(this.width * this.height);
  }
}

let shape1 = new Shape(5, 10);
shape1.getArea();

// Create a class called "Movie" that has properties for title, director, and rating. Add a method called "play" that logs a message to the console indicating that the movie is playing.

class Movie {
  constructor(title, director, rating) {
    this.title = title;
    this.director = director;
    this.rating = rating;
  }
  play() {
    console.log(
      `You are now playing ${this.title} by ${this.director} and it has a rating of ${this.rating}`
    );
  }
}

let movie1 = new Movie("Superbad", "Greg Mottola", 7.6);
movie1.play();

// Create a class called "Product" that has properties for name, price, and description. Add a method called "display" that logs a message to the console displaying the product's name, price, and description.

class Product {
  constructor(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
  }
  display() {
    console.log(`Item: ${this.name}, $${this.price}, ${this.description}`);
  }
}

let product1 = new Product(
  "Fuji Apples",
  "1.00",
  "Fuji apples have a light red skin with a yellow blush, often with red stripes"
);
product1.display();

// (Optional) Create a class called "BankAccount" that has properties for account number and balance. Add methods called "deposit" and "withdraw" that allow users to deposit or withdraw money from the account.

class BankAccount {
  constructor(accountnumber, balance) {
    this.accountnumber = accountnumber;
    this.balance = balance;
  }
  depost() {}
  withdraw() {}
}

// (Optional) Create a class called "Recipe" that has properties for name, ingredients, and instructions. Add a method called "cook" that logs a message to the console indicating that the recipe is being cooked.

// (Optional) Create a class called "Employee" that has properties for name, job title, and salary. Add a method called "calculateBonus" that calculates and returns the employee's bonus based on their salary.
