var koa=require('koa');
var koa_router=require('koa-router');
var router=new koa_router();
var app=new koa();
app.use(router.routes());
app.use(router.allowedMethods());
router.get('/',(ctx,next)=>{
    ctx.body='helloworld';
})
app.listen(9889);