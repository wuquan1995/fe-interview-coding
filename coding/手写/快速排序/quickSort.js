
function quickSort(nums){
    if(nums.length <=1){
        return nums;
    }
    let left = 0 , right = nums.length -1;
    let mid = (right + left) / 2;
    let leftArr = [], rightArr = [];
    const privot = nums.splice(mid,1)[0];
    for(let i = 0 ; i < nums.length; i++){
        if(nums[i] > privot){
            rightArr.push(nums[i])
        }else{
            leftArr.push(nums[i])
        }
    }
    return [...quickSort(leftArr),privot,...quickSort(rightArr)];
}

console.log(quickSort([2,8,6,4,5,7,1]))