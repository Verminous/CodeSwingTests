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


