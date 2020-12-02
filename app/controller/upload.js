'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const ctx = this.ctx;
    const { file } = ctx.request.body;
    console.log(ctx.model);
    const user = await ctx.Upload.User.create({file});
    ctx.status = 201;
    ctx.body = user;
  }
  async video() {
    const ctx = this.ctx;

    ctx.status = 201;
    ctx.body = {a:0};
  }
}

module.exports = HomeController;
