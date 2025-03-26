
// 全排列
let permute = (nums)=>{
  let path = [];
  let result = [];
  let used = [];
  let backtracking = ()=>{
    if(path.length === nums.length){
        result.push(path.slice())
        return
    }

    for(let i = 0; i < nums.length; i++){
        if(used[i]) continue;
        path.push(nums[i]);
        used[i] = true;
        backtracking();
        path.pop();
        used[i] = false;
    }
  }
  backtracking();
  return result;
}

console.log(permute([1,2,3,4]))