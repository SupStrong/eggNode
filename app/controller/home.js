'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async godds() {
    const { ctx } = this;
    ctx.body = '修喜喜';
  }
}

module.exports = HomeController;
