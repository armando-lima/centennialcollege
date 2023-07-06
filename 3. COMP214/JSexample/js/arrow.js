//Tradional function for multiplication
function multiplication(num1, num2){
    return num1 * num2;
}
console.log(multiplication(5,2));

//Arrow function
const multiplicationArrow = (num1, num2) => num1*num2;

console.log(multiplicationArrow(3,2));

//declare array with elements
let numbers = [11, 22, 33, 44];
const squareArrow = numbers.map(n => n * n);
console.log(squareArrow);

numbers.forEach(n => {
    if(n % 2 == 0)
        console.log(n);
    });
