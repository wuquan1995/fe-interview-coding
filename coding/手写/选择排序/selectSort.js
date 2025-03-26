function selectSort(nums){
    // 冒泡排序是左右两个数相比较，而选择排序是用后面的数和每一轮的第一个数相比较；
  for(let i  = 0 ; i < nums.length; i++){
    for(let j = i + 1; j < nums.length;j++){
        if(nums[j] < nums[i]){
           [nums[i],nums[j]] = [nums[j],nums[i]];
        } 
    }

  }
return nums;
}
console.log(selectSort([2,8,6,4,5,7,1]))
