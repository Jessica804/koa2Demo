const Koa = require('koa');
const app = new Koa();
const logger = require('koa-logger');

// app.use(async(ctx,next) => {
//    ctx.body = 'Hi Luke'
// })

const mid1 = async (ctx,next) =>{
    ctx.type = 'text/html;charset=utf-8';
    await next();
};

const mid2 = async (ctx,next) =>{
    ctx.body = 'hi';
    await next();
}

const mid3 = async (ctx,next) =>{
    ctx.body = ctx.body + 'Luke';
    await next();
}
app.use(logger());
app.use(mid1);
app.use(mid2);
app.use(mid3);

app.listen(2333);