function throttle(fn , delay){
    let lastTime  = 0
    return function(...args){
        let nowTime = Date.now(), context = this;
        if(nowTime - lastTime >= delay){
            lastTime =  nowTime;
            fn.apply(context,args)
        }
    }
}

function testThrottle() {
    let count = 0;
    const throttledFunction = throttle(function() {
        count++;
    }, 1000);

    for (let i = 0; i < 10; i++) {
        throttledFunction();
    }

    setTimeout(() => {
        console.log('Count after 3000ms:', count); // 应该接近1，因为1秒内只执行一次
    }, 3000);
}

testThrottle();
