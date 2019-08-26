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
/***********************
 Array filter Example
 ***********************/

// filter an array based on search criteria
// return only the positive numbers
const newValues = [1,-1,2,5,6];

const filtered = newValues.filter( value => value >=0);
console.log('filtered:', filtered); // output is [1,2,5,6]
// filter will loop through this array and execute call back function for each numbers / element
// if the element matches this criteria then it will add this element to a new array (filtered)
//In real world applications we will be using array of objects for ex : yelp.com filtered by open now
