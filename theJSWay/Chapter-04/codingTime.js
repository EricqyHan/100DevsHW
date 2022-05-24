// Carousel
for (let i = 1; i <= 10; i++) {
  console.log(`Turn ${i}`);
}

let x = 0;
while (x != 10) {
  x++;
  console.log(`Turn ${x}`);
}

for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else if (i % 2 !== 0) {
    console.log(`${i} is odd`);
  }
}

// Fizzbuzz
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} : FizzBuzz`);
  } else if (i % 5 === 0) {
    console.log(`${i} : Fizz`);
  } else if (i % 3 === 0) {
    console.log(`${i} : Buzz`);
  } else {
    console.log(`${i}`);
  }
}
