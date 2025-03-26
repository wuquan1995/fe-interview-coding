function treeToArray(tree){
   let result = [];
   let queue = [];
   result.push({ id:tree.id,name:tree.name, parentId:0});
   queue.unshift({id:tree.id,name:tree.name,children:tree.children})
   while(queue.length > 0 ){
      const currentNode = queue.shift();
      if(currentNode.children.length > 0){
            for(let i = 0; i < currentNode.children.length;i++){
                const childNode =  currentNode.children[i];
                const {id ,name } = childNode;
                queue.unshift(childNode);
                result.push({
                    id,
                    name,
                    parentId:currentNode.id
                })
            }
      }
   }
   return result;
}

const tree = {
  id: 1,
  name: "部门A",
  children: [
    {
      id: 2,
      name: "部门B",
      children: [
        {
          id: 4,
          name: "部门D",
          children: [
            {
              id: 7,
              name: "部门G",
              children: [
              ],
            },
            {
              id: 8,
              name: "部门H",
              children: [
              ],
            },
          ],
        },
        {
          id: 5,
          name: "部门E",
          children: [
          ],
        },
      ],
    },
    {
      id: 3,
      name: "部门C",
      children: [
        {
          id: 6,
          name: "部门F",
          children: [
          ],
        },
      ],
    },
  ],
}
console.log(treeToArray(tree));

