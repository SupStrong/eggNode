module.exports = (option, app) => {
    return async function auth(ctx, next) {
        // 获取配置所传的参数
        // 实现中间件的功能
        await next();
　　　　ctx.body = `获取到的ip是:${new Date()}`;
    }
}