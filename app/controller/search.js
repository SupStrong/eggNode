'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = {
      name:`hell 111`,
    }
  }
}

module.exports = HomeController;
