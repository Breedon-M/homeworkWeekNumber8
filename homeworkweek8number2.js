
let arr = [];
for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}
console.log(arr);

function divisibilityCheckerFactory(x) {
    const checkerFn = () => arr.filter(num => num % x === 0);
        return checkerFn;
    
}

//Implement the logic here


const divBy3 = divisibilityCheckerFactory(3);
console.log("numbers divisible by 3 " + divBy3());

const divBy10 = divisibilityCheckerFactory(10);
console.log(`numbers divisible by 10 ${divBy10()}`);

const divBy21 = divisibilityCheckerFactory(21);
console.log(`numbers divisible by 21 ${divBy21()}`);


//----------------------------------------

