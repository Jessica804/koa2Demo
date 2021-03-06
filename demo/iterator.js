// function makeItertor(arr){
//     let nextIndex = 0;
    
//     //返回一个迭代器对象
//     return {
//        next:() =>{
//            //next()方法返回的结果对象
//            if(nextIndex < arr.length){
//                 return {
//                     value :arr[nextIndex++],
//                     done:false
//                 }
//            }else{
//                return {
//                    done:true
//                }
//            }
//        }
//     }
// }

// const it = makeItertor(['吃饭','睡觉','打豆豆']);

// console.log('首先',it.next().value);
// console.log('其次',it.next().value);
// console.log('然后',it.next().value);
// console.log('最后',it.next().done);


function *makeIterator(arr){  //生成器是为了更方便我们使用迭代器函数而出现的
      for(let i = 0; i<arr.length;i++){
           yield arr[i]
      }
}

const gen = makeIterator(['吃饭','睡觉','打豆豆']);
console.log('首先',gen.next().value);
console.log('其次',gen.next().value);
console.log('然后',gen.next().value);
console.log('最后',gen.next().done);