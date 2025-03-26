
// 从1-n中选择k个数任意组合
// 从 [1,2,3,4]里面挑两个数组合，注意[1,2]和[2,1]是同一组
let combine =  (n)=>{
    let result = [];
    let path  = [];
    let backtracking = (startIndex)=>{
       if(path.length === k){
          result.push(path.slice())
          return
       }
       for(let i = startIndex; i <=n; i++){
         path.push(i);
         backtracking(i+1);
         path.pop()
       }

    }

    backtracking(1)
    return result;

}

console.log(combine(4,2))