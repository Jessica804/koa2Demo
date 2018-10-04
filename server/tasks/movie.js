const cp = require('child_process');
const {resolve} = require('path');

;(async ()=>{
    const script = resolve(__dirname,'../crawler/trailer-list');
    const child = cp.fork(script,[]); //派生出一个子进程
    let invoked = false;

    child.on('error',err =>{
        if(invoked) return;
        invoked =false;
        console.log(err);
    })

    child.on('exit',code => {
        console.log('执行了exit回调');
        if(invoked) return;
        invoked =false;
        let err = code === 0 ?null:new Error('exit code'+ code);
        console.log(err);
    });

    child.on('message',data =>{
        console.log('执行了message回调');
        console.log(data)
        let result = data.result;
        console.log(result);
    })

})();