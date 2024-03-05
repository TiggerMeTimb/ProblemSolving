var addTwoNumbers = function (l1, l2) {
  //take in list in reverse order, then add the contents
  l1.reverse();
  l2.reverse();
  
  num1 = l1.reduce((accum, lst) => (accum*10) + lst, 0);
  num2 = l2.reduce((accum, lst2) => (accum*10) + lst2, 0);

  maths = num1 + num2;

  const output = String(maths).split('').map(Number);

  return output.reverse();
}

//rendering the output of the function 

console.log(addTwoNumbers([2,4,3], [5,6,4]));
console.log("=====================================");
console.log(addTwoNumbers([0], [0]));
console.log("=====================================");
console.log(addTwoNumbers([9,9,9,9,9,9,9], [9,9,9,9]));
console.log("End Test");
