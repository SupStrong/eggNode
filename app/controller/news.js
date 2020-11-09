'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      name:`hello ${111}`,
    }
  }
}

module.exports = HomeController;
