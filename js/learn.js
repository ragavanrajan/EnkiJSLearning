const values = [1,5,10,20,100];

// a=1, c=1 => a =1
// a=1, c= 5 => a =5
// a=5, c=10 => a =50
// a =50, c =20 => a = 50 * 20 = 1000
// a =1000, c= 100 => a = 1000 * 100 = 100000
const output= values.reduce((accumulator, currentValue) => {
    return accumulator * currentValue;
});

console.log('Output:', output); // output is 100000
