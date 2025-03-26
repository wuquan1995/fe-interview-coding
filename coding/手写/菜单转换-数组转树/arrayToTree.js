const arr = [
    {id:1, name: '部门A', parentId: 0},
    {id:2, name: '部门B', parentId: 1},
    {id:3, name: '部门C', parentId: 1},
    {id:4, name: '部门D', parentId: 2},
    {id:5, name: '部门E', parentId: 2},
    {id:6, name: '部门F', parentId: 3},
    {id:7, name: '部门G', parentId: 4},
    {id:8, name: '部门H', parentId: 4}
]


function arrayToTree(arr){
  let map  = new Map()
  let result = null;
  for(let i = 0; i < arr.length; i++){
    const { id , name } = arr[i]
    const children = [];
    map.set( id, { id, name, children})
  }

  for(let  i = 0;  i < arr.length;i++){
    const { parentId , id } = arr[i]
    if(parentId !== 0){
        const parentNode = map.get(parentId);
        parentNode.children.push(map.get(id));
    }else{
        result = map.get(id);
    }
  }
 return result;
}
console.log(arrayToTree(arr))