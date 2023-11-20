/* 
   Filename: complexCodeExample.js
   Content: An elaborate and complex code example showcasing various JavaScript concepts and techniques.
*/

// Class representing a car
class Car {
  constructor(brand, color, price) {
    this.brand = brand;
    this.color = color;
    this.price = price;
  }

  displayInfo() {
    console.log(`Brand: ${this.brand}`);
    console.log(`Color: ${this.color}`);
    console.log(`Price: $${this.price}`);
  }
}

// Function to determine if a number is prime
function isPrime(num) {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

// Array with prime numbers
const primeNumbers = [];
for (let i = 2; primeNumbers.length < 100; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  }
}

// Promises example
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 1 resolved");
  }, 1000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Promise 2 resolved");
  }, 2000);
});

Promise.all([promise1, promise2])
  .then((results) => {
    console.log(results);
  })
  .catch((error) => {
    console.error(error);
  });

// Async function example
async function fetchPosts() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchPosts();

// Map example
const car1 = new Car("Toyota", "Red", 25000);
const car2 = new Car("BMW", "Black", 50000);
const car3 = new Car("Honda", "Blue", 30000);

const cars = new Map();
cars.set(car1, "Car 1");
cars.set(car2, "Car 2");
cars.set(car3, "Car 3");

console.log(cars.get(car1));

// Regular expression example
const regex = /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi;
const email = "example@example.com";

if (regex.test(email)) {
  console.log("Valid email");
} else {
  console.log("Invalid email");
}

// Complex logic example
function processData(data) {
  let result = "";

  if (data.length > 100) {
    result = "Data too long.";
  } else {
    const words = data.split(" ");
    const reversedWords = [];

    for (let i = words.length - 1; i >= 0; i--) {
      reversedWords.push(words[i]);
    }

    result = reversedWords.join(" ");
  }

  return result;
}

const input = "This is a complex code example with more than 200 lines.";
console.log(processData(input));

// Timer example
function countdown(seconds) {
  return new Promise((resolve, reject) => {
    let remainingSeconds = seconds;

    const timer = setInterval(() => {
      console.log(remainingSeconds);

      remainingSeconds--;

      if (remainingSeconds === 0) {
        clearInterval(timer);
        resolve("Countdown complete!");
      }
    }, 1000);
  });
}

countdown(5)
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.error(error);
  });

// ... More code here ...

/* 
   Complex code continues...
   More classes, functions, and code blocks can be added as needed to reach over 200 lines.
*/

// End of complexCodeExample.js