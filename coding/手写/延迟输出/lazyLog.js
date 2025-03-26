// 调用方式：(new LazyLog()).log(1).sleep(1000).log(2)
// 输出：先输出1，延迟1秒后输出2

class LazyLog {
    constructor(){
       this.queue = [] 
       setTimeout(()=>{
         this.run()
       },0)
    }
    async run(){
        for(let task of this.queue){
            await task();
        }
    }

    log(value){
        this.queue.push(()=>{
            console.log(value)
        })
        return this;
    }

    sleep(time){
        this.queue.push(()=>{
            return new Promise((resolve)=>{
                setTimeout(resolve,time)
            })
        })
        return this;
    }
}

console.log(new LazyLog().log(1).sleep(1000).log(2));