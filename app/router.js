'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isUrl = app.middleware.middlewareOne({params: '888',});
  const auth = app.middleware.auth({ title: 'this is router.js  middleware' })
  router.get('/',isUrl,controller.home.index);
  router.get('/news', auth, controller.news.index);
  
};
