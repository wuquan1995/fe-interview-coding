
let permute = (nums)=>{
  let result = [];
  let path = [];
  let used = [];
  let backtracking = ()=>{
     if(path.length === nums.length){
        result.push(path.slice())
        return
     }
     for(let i = 1; i <= nums.length;i++){
        if(used[i]) continue
        path.push(i)
        used[i] = true
        backtracking()
        path.pop()
        used[i] = false
     }
  }
  backtracking();
  return result;
}


console.log(permute([1,2,3,4]))