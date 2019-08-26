const numbers = [1, -1,2,3];
// To calculate the sum of all the numbers in the above array
//Similar to calculating all the items of shopping cart, assuming each numbers is the price of the item ( ignore negative numbers)
let sum =0;

for (let n of numbers)
    // sum = sum + n;
sum += n;
console.log('sum:',sum);  // including negative sum . output is five (5)

// cleaner way is using reduce. With reduce we can reduce array in to single value
// single value can be a number
// can be a string, object or anything

//In this ex: we want to reduce all elements in to single number

//a=0, c= 1 => a =1
//a =1, c=-1 => a =0
//a=0, c =2=> a =2
//a=2, c= 3 => a= 5

const sum1 =numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;

}, 0);

console.log('sum1:', sum1);

//accumulator is exactly like sum here. Then the call back function is executed multiple times
// each time the current value is set to 1 from the array
// first argument is a callback function
//second argument is a call back value . Here it is 0
//Note: you can do without initialization that is 0

