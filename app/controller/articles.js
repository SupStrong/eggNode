// app/controller/users.js
const Controller = require('egg').Controller;

function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

class ArticleController extends Controller {
  async index() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Article.findAll();
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.Article.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const data = ctx.request.body;
    const article = await ctx.model.Article.create(data);
    ctx.status = 201;
    ctx.body = article;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const article = await ctx.model.Article.findByPk(id);
    if (!article) {
      ctx.status = 404;
      return;
    }

    const { name, age } = ctx.request.body;
    await article.update({ name, age });
    ctx.body = article;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const article = await ctx.model.Article.findByPk(id);
    if (!article) {
      ctx.status = 404;
      return;
    }
    await article.destroy();
    ctx.status = 200;
  }
}

module.exports = ArticleController;