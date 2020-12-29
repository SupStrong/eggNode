// app/controller/users.js
const Controller = require('egg').Controller;
const { time } = require('../extend/static');
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str) || 0;
}
class UserListsController extends Controller {
  async index() {
    const ctx = this.ctx;
    const page = ctx.query.page;
    const limit = ctx.query.limit;
    const query = {
      offset: toInt(limit) * toInt(page - 1),
      limit: toInt(limit)
    };
    ctx.body = await ctx.model.UserLists.findAndCountAll({ ...query , raw: true});
  }

  async show() {
    const ctx = this.ctx;
    const  data = await ctx.model.UserLists.findByPk(toInt(ctx.params.id));
    ctx.body =  {status:1,message:'请求成功',data:data}
  }

  async create() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    data.create_time = time();
    const UserLists = await ctx.model.UserLists.create(data);
    ctx.status = 201;
    ctx.body = {data:UserLists,status:1,message:'创建成功'};
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const UserLists = await ctx.model.UserLists.findByPk(id);
    if (!UserLists) {
      ctx.status = 404;
      return;
    }
    await UserLists.update(ctx.request.body);
    ctx.body = {status:1,'message':'更新成功'};
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const UserLists = await ctx.model.UserLists.findByPk(id);
    if (!UserLists) {
      ctx.status = 404;
      return;
    }
    await UserLists.destroy();
    ctx.status = 200;
    ctx.body = {status:1,'message':'删除成功'};
  }
}

module.exports = UserListsController;