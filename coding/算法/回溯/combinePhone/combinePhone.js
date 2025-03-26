function combinePhone(str){
  let phoneArr = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  let path = [],result = [];
  let backtracking = (startIndex)=>{
     if(path.length ===  str.length){
        result.push(path.join(""));
        return
     }
     for(let i = startIndex;i < str.length;i++){
        for(const v of phoneArr[str[i]]){
            path.push(v);
            backtracking(i+1);
            path.pop()
        }
     }

  }
  backtracking(0);
  return result;
}
console.log(combinePhone("23"));