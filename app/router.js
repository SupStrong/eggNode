'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isUrl = app.middleware.middlewareOne({params: '888',});
  const auth = app.middleware.auth({ title: 'this is router.js  middleware' })
  // router.get('/news', controller.news.index);
  // router.get('/home/index', controller.home.godds);
  // router.get('s', '/search' , controller.search.index)
  // router.redirect('/index', '/home/index', 302);
  router.resources('articles', `/articles/`, controller.articles);
  // router.get('/editor/upload' , controller.upload.index)
  // router.post('/upload/video' , controller.upload.video)
  
  // router.get('/user/list/:id' , controller.users.detail)
};
