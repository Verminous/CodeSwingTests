///// - FIZZBUZZ - /////

for (let i = 1; i <= 100; i++) {
    if (i % 15 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

let i = 1;
while (i <= 100) {
    let output = '';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
    i++;
}


for (let i = 1; i <= 100; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    if (i % 7 === 0) out += 'Bang';
    console.log(out || i);
}

///// - CLOSURE - /////

function testfunction() {
    let counter = 0;
    return function testReturnFunction() {
        counter++;
        return counter;
    }
}

const myCount = testfunction();
console.log(myCount());
console.log(myCount());
console.log(myCount());

///// - PASS BY VALUE vs. PASS BY REFERENCE - /////

let age = 66;
function tellAge(value) {
    value = 25;
}
tellAge(age);
console.log(age);

// /////////////

let thatPerson = {
    name: "John",
    age: 30
}

function changeAge(ageObj) {
    ageObj.age = 99;
}

changeAge(thatPerson);
console.log(thatPerson.age);

///// - HOISTING - /////

console.log(myVar);
var myVar = 5;
console.log(myVar);

////// - "this." - /////

const myProfile = {
    name: 'Bruno',
    greet: function helloThere() {
        console.log("Hello, my name is " + this.name);
    }
}

myProfile.greet();



///// - PRIMEBUZZ - /////

function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i * i <= num; i++) {
        if (num % i === 0) return false;

    }
    return true;

}

for (let i = 1; i <= 100; i++) {
    let output = '';
    if (isPrime(i)) output += 'Prime';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}

///// - FIBONACCIFIZZ - /////

function isFibonacci(num) {
    let a = 0, b = 1;
    while (b < num) {
        let temp = b;
        b = a + b;
        a = temp;
    }
    return b === num;
}

for (let i = 1; i <= 100; i++) {
    let output = '';
    if (isFibonacci(i)) output += 'Fib';
    if (i % 3 === 0) output += 'Fizz';
    if (i % 5 === 0) output += 'Buzz';
    console.log(output || i);
}

///// - NO MODULO - /////

let fizzCounter = 0;
let buzzCounter = 0;
for (let i = 1; i <= 100; i++) {
    fizzCounter++;
    buzzCounter++;
    let output = '';
    if (fizzCounter === 3) {
        output += 'Fizz';
        fizzCounter = 0;
    }
    if (buzzCounter === 5) {
        output += 'Buzz';
        buzzCounter = 0;
    }
    console.log(output || i);
}

///// - FUNCTIONAL FIZZBUZZ - /////

const fizzBuzzFunctional = Array.from({ length: 100 }, (_, i) => {
    const n = i + 1;
    const fizz = n % 3 === 0 ? 'Fizz' : '';
    const buzz = n % 5 === 0 ? 'Buzz' : '';
    return fizz + buzz || n;
});

console.log(fizzBuzzFunctional.join('\n'));

///// - OBJECT-ORIENTED FIZZBUZZ - /////

class Rule {
    constructor(divisor, word) {
        this.divisor = divisor;
        this.word = word;
    }

    applies(number) {
        return number % this.divisor === 0;
    }
}

const rules = [
    new Rule(3, 'Fizz'),
    new Rule(5, 'Buzz')
];

for (let i = 1; i <= 100; i++) {
    let output = '';
    for (const rule of rules) if (rule.applies(i)) output += rule.word;
    console.log(output || i);
}

///// - SEQUENTIAL FIZZBUZZ - /////

for (let i = 1; i <= 100; i++) {
    let output = '';
    if (i.toString().includes('3')) output += 'Fizz';
    if (i.toString().includes('5')) output += 'Buzz';
    console.log(output || i);
}
