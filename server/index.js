const Koa = require('koa');
const app = new Koa();
const ejs = require('ejs');
const pug = require('pug');
const views = require('koa-views');
const {htmlTpl,ejsTpl,pugTpl} = require('./tpl')
const {resolve} = require('path');


app.use(views(resolve(__dirname,'./views'),{
    extension:'pug'
}));

app.use(async(ctx,next) =>{
    ctx.type = 'text/html;charset=utf-8'
    await ctx.render('index',{
       you:'Luke',
       me:'Julie'
   });

});

app.listen(4455);