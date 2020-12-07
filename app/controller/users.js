'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  // 获取用户列表/详情
  async detail() {
    const { ctx } = this;
    try {
      let id = ctx.params.id; 
      let data =  await ctx.model.User.findAll({
        attributes: ['id','user_id','title'],
        where: { id },
        include: [{
          model: ctx.model.List
        }],
      });
      ctx.body = data
    }catch(err){
      console.log(err);
      return null;
    }
  }
}

module.exports = UserController;
