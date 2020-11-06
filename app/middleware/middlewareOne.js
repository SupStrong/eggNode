module.exports = (options, app) => {
　　return async function middlewarreone(ctx, next) {
　　　　const url = ctx.header.host;
        console.log(ctx,"ctx");
　　　　await next();
　　　　ctx.body = `获取到的ip是:${url}`;
　　}
};