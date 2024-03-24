const add = function(number1,number2) {
  const sum =number1+number2;
  return sum;
};

const subtract = function(number1,number2) {
  const sum =number1-number2;
  return sum;
};

const sum = function(array) {
  let sum = 0;
  let i =0;
	if(array.length===0){
   return 0;
  }
  else{
  while(i<array.length){
    sum+=array[i];
    i++;
  }
  return sum;
}
};

const multiply = function(array) {
  let product = 1;
  let i =0;
  while(i<array.length){
    product*=array[i];
    i++;
  }
  return product;
};

const power = function(base,exponent) {
	const answer = Math.pow(base,exponent);
  return answer;
};

const factorial = function(number) {
	let sum=1;
  if(number === 1 || number === 0)
  {
    return 1;
  }
  else{
    for(let i =2;i<=number;i++)
    {
      sum*= i;
    }
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
