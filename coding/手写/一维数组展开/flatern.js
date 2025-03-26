let arr = [1, [2, [3, 4, 5]]];
function flatten(arr) {
  let result = [];

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    if(Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
flatten(arr);  //  [1, 2, 3, 4，5]