
const repeatString = function(string,num) {
  let i=0;
  let finalString='';
  if(num<0)
  {
    finalString ='ERROR';
  }
    for(i===0;i<num;i++)
    {
      finalString+=string;
    }
    return finalString;
};

// Do not edit below this line
module.exports = repeatString;
