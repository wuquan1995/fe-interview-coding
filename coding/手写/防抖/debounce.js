function debounce(fn, wait, immediate = false){
    let timer = null;
    return function(...args){
        let that = this;
        if(immediate && !timer){
           fn.apply(that,args)
        }else if(timer){
            clearTimeout(timer);
            timer = null;
            timer = setTimeout(()=>{
                fn.apply(that,args)
              },wait)
        }else{
            timer = setTimeout(()=>{
                fn.apply(that,args)
              },wait)
        }
    }
}



function testDebounceWithConsecutiveCalls() {
    let count = 0;
    const increment = () => count++;
    const debouncedIncrement = debounce(increment, 500);

    console.log('Test 2 start: count should be 0', count); // 初始值应为0

    // 在防抖时间内连续调用
    debouncedIncrement();
    setTimeout(debouncedIncrement, 300);
    setTimeout(debouncedIncrement, 600);

    // 等待足够长的时间以确保所有调用都被处理
    setTimeout(() => {
        console.log('Test 2 after wait: count should be 1', count); // 等待后应为1
    }, 1500);
}

testDebounceWithConsecutiveCalls();
