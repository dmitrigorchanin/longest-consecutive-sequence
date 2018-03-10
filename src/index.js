module.exports = function longestConsecutiveLength(array) {
  
  if (array.length === 0){
    return 0;
  }
  if (array.length === 1){
    return 1;
  }
    
  function compareNumeric(a, b) {
      return a - b;
  }

  function getMax(arr){
    let max = arr[0]; 
    for (var i = 0; i < arr.length; i++) { 
      if (max < arr[i]) {
        max = arr[i]; 
      }
    }
    return max;
  }

  array.sort(compareNumeric);

  let i = 0;
  let arr = [];

  while (i<array.length) {
    let count = 1;

    while (array[i] === (array[i+1]-1)) {
        count++;
        i++;
    }

    i++;

      arr.push(count);

  } 
  
  return getMax(arr);
}