//filter method of array

var input = [14,16,17,23,34,36,28]

var result = input.filter(item => item>18)

console.log(result);


//for each method 

var input = [5,6,7,8,9,3];
var sum =0;

var result = input.forEach((item) => {sum = sum+item; console.log(sum);})

// console.log(r);


// reduce method

var input = ["javascript","css","html"];

var result = input.reduce((item,index)=>item+index);

console.log(result);


//indexof method

var input = ["javascript","css","html"];

var result = input.indexOf("script",4);

console.log(result);


//push method

var input = ["javascript","css","html"];

 console.log(input);

console.log(input.push("mugesh"));
 console.log(input);




 //pop method

var input = ["javascript","css","html"];
console.log(input);

 console.log(input.pop());





 //shift method

var input = ["javascript","css","html"];


 console.log(input)
 console.log(input.shift());


 //unshift method

var input = ["javascript","css","html"];

input.unshift("mugesh","react");

 console.log(input);


  //unshift method

var input1 = ["javascript","css","html"];
var input2 = ["javascript","css","html"];

var result = input1.concat(input2)

 console.log(result);


 //every method of array

var input = [14,16,17,23,34,36,28]

var result = input.every(item => item>10)

console.log(result);