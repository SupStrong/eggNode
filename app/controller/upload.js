'use strict';

const Controller = require('egg').Controller;
const path = require('path');
const fs = require('fs');

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
    const file = ctx.request.files[0];
    const fileinfo = fs.readFileSync(file.filepath);
    const name = `YLW_${new Date().getTime()}_${file.filename}`;
    const target = path.join(this.config.baseDir, `app/public/upload/${name}`);
    try {
      await fs.writeFileSync(target, fileinfo);
    } catch (error) {
      throw error;
    }
    ctx.status = 200;
    ctx.body = { status: 200, message: '上传成功!', data: {uploadUrl:target} };
  }
}

module.exports = HomeController;
