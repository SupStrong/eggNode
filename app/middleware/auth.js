module.exports = (option, app) => {
    return async function auth(ctx, next) {
        // 获取配置所传的参数
        console.log(option);
        // 实现中间件的功能
        console.log(new Date());
        await next();
　　　　ctx.body = `获取到的ip是:${new Date()}`;
    }
}