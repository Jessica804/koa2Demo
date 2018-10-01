//箭头函数写法简单，可以和父作用域贡献this

// const arrow = function(param){}

// const arrow = (param) => {}

// const arrow = param =>{}

// const arrow = param = console.log(param);

// const arrow = param =>({param:param});

// const arrow = (param1,param2) => {}

// //{id:1,movie:xxx}

// const arrow = ({id,movie}) => console.log(id,movie);


const luke = {
    id:2,
    say:function(){
        setTimeout(function(){
           console.log('id:',this.id);
        },50)
    },
    sayWithThis:function(){
        let that = this;
        setTimeout(function(){
            console.log('id:',that.id);
         },50)
    },
    sayWithArrow:function(){
    
        setTimeout(()=>{
            console.log('id:',this.id);
         },50)
    },
    sayWithArrow2:function(){
    
        setTimeout(()=>{
            console.log('id:',this.id);
         },50)
    }
}

luke.sayWithArrow();