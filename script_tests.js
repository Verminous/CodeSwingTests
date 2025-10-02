///// - FIZZBUZZ - /////

for (let i = 1; i <= 100; i++){
    if(i % 15 === 0){
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}

for (let i = 1; i <= 100; i++){
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    if (i % 7 === 0) out += 'Bang';
    console.log(out||i);
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
function tellAge(value){
    value = 25;
}
tellAge(age);
console.log(age);

// /////////////

let thatPerson = {
    name: "John",
    age: 30
}

function changeAge(ageObj){
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
    greet: function helloThere(){
        console.log("Hello, my name is " + this.name);
    }
}

myProfile.greet();