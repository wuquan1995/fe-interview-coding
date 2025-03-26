// 冒泡排序是左右两个数相比较，比较的过程中会随着下标的移动固定住末尾的数。
// 而选择排序是用后面的数和每一轮的第一个数相比较，随着比较的过程固定住最前面的数
function bubbleSort(nums){
    for(let i = 0;  i < nums.length; i++){
        for(let j = 0; j < nums.length - i -1 ; j++){
            if(nums[j+1] < nums[j]){
                [nums[j],nums[j+1]] = [nums[j+1],nums[j]]
            }
        }
    }
    return nums;
}

console.log(bubbleSort([2,8,6,4,5,7,1]))