// 从1-n中选择k个数任意组合
// 从 [1,2,3,4]里面挑两个数组合，注意[1,2]和[2,1]是同一组

function combine(n,k){
   let result = [];
   let path = [];
   function backtracking(temp){
     if(path.length === k){
        result.push(path.slice());
        return
     }
     // 由于[1,2]和[2,1]是同一个结果，所以要进入向下回溯时要自增，否则将会重复数据
     for(let i = temp; i <=n ;i++){
        path.push(i);
        backtracking(i+1);
        path.pop();
     }
   }
   backtracking(1);
   return result;
}


console.log(combine(4,2))