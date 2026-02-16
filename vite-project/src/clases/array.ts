const myArray = [1,2,3,4];

myArray.push(6);
myArray.push(7);

console.log(myArray);

let a, b, rest;

[a, b, ...rest] = [10, 20, 50, 60, 70, 80];
console.log(a);
console.log(b);
console.log(rest);