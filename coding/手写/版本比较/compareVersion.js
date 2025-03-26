// 样例输入：versions = ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
// 输出：['0.1.1', '0.302.1', '2.3.3', '4.3.4.5', '4.3.5']


function compareVersion(arr){
   let copyArr = [...arr];
    copyArr.sort((a,b)=>{
      const tempA = a.split('.');
      const tempB = b.split('.');
      const maxLen = Math.max(tempA.length, tempB.length);
      for(let i = 0; i < maxLen;i++){
           const  targetA = +tempA[i] || 0;
           const  targetB = +tempB[i] || 0;
           if(targetA === targetB) continue
           return targetA - targetB
      }
      return 0;
   })
   return copyArr;
}
let  versions =  ['0.1.1', '2.3.3', '0.302.1', '4.2', '4.3.5', '4.3.4.5']
let copyArr = compareVersion(versions);
console.log("copyArr",copyArr);
console.log("versions",versions);