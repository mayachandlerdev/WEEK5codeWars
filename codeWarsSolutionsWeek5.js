//1) Multiply
function multiply(a, b){
 return a * b
}
//2)Basic Mathematical Operations
function basicOp(operation, value1, value2){
  if(operation === "+"){
    return value1 + value2;
  } else if(operation === "-"){
    return value1 - value2;
  } else if(operation === "*"){
    return value1 * value2;
  } else if(operation === "/"){
    return value1 / value2;
  }
}

basicOp("-", 2, 1);
//3)Grasshopper = summation
var summation = function (num) {
 var sum = 0;
  for (var i = 1; i <= num; i++) {
    sum += i;
  }
  return sum;
}
// 4)Remove First and Last Character
function removeChar(str){
 return str.slice(1,-1);
};
//5)Opposite Number
function opposite(number) {
  let i = number;
  if (i = 1 && i >0 && i++);
  return -(number)
}
