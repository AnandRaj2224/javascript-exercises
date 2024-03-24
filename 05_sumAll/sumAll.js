const sumAll = function(firstNumber,secondNumber) {
  let sum =0;
  const check ='ERROR';
  let startDigit;
  let endDigit;
  if(firstNumber>secondNumber)
  {
    startDigit=secondNumber;
    endDigit=firstNumber;
  }
  else
  {
    startDigit=firstNumber;
    endDigit=secondNumber;
  }
  if(startDigit < 0 || endDigit < 0 || typeof firstNumber !== 'number' || typeof secondNumber !== 'number' )
  {
     return check;
  }
  else{
    for(let i=startDigit;i<=endDigit;i++)
  {
    sum+=i;
  }
  return sum;
  }
  
};

// Do not edit below this line
module.exports = sumAll;
