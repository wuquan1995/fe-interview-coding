function DeepCopy(obj){
  if(typeof obj !=='object'){
     return obj;
  }
  let copyObj = Array.isArray(obj) ? []:{};
  for(let prop in obj){
    const item = obj[prop];
    if(Object.prototype.hasOwnProperty.call(obj,prop)){
        copyObj[prop] =  typeof item === 'object' ? DeepCopy(item) : item;  
    }
  }
 return copyObj;
}

const obj = {a:1,b:{c:2},d:[1,4,3]};
console.log('testOBj',DeepCopy(obj))