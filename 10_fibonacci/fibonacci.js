const fibonacci = function(position) {
  if(position<0) return "OOPS";
  let array =new Array();
  array[0]=0;
  array[1]=1;
  array[2]=1;
  for(let i = 3;i<=position;i++)
  {
    array[i]=array[i-1]+array[i-2];
  }
  return array[position];
};

// Do not edit below this line
module.exports = fibonacci;
