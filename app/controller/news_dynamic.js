// app/controller/users.js
const Controller = require('egg').Controller;
const { time } = require('../extend/static');
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str) || 0;
}

class NewsDynamicController extends Controller {
  async index() {
    const ctx = this.ctx;
    const page = ctx.query.page;
    const limit = ctx.query.limit;
    const query = {
      offset: toInt(limit) * toInt(page - 1),
      limit: toInt(limit)
    };
    ctx.body = await ctx.model.NewsDynamic.findAndCountAll({ ...query , raw: true});
  }

  async show() {
    const ctx = this.ctx;
    const  data = await ctx.model.NewsDynamic.findByPk(toInt(ctx.params.id));
    ctx.body =  {status:1,message:'请求成功',data:data}
  }

  async create() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    data.create_time = time();
    const NewsDynamic = await ctx.model.NewsDynamic.create(data);
    ctx.status = 201;
    ctx.body = {data:NewsDynamic,status:1,message:'创建成功'};
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const NewsDynamic = await ctx.model.NewsDynamic.findByPk(id);
    if (!NewsDynamic) {
      ctx.status = 404;
      return;
    }
    await NewsDynamic.update(ctx.request.body);
    ctx.body = {status:1,'message':'更新成功'};
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const NewsDynamic = await ctx.model.NewsDynamic.findByPk(id);
    if (!NewsDynamic) {
      ctx.status = 404;
      return;
    }
    await NewsDynamic.destroy();
    ctx.status = 200;
    ctx.body = {status:1,'message':'删除成功'};
  }
}

module.exports = NewsDynamicController;