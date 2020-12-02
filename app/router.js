'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isUrl = app.middleware.middlewareOne({params: '888',});
  const auth = app.middleware.auth({ title: 'this is router.js  middleware' })
  const uppercase = app.middleware.uppercase()
  router.get('/',controller.home.index);
  router.get('/news', controller.news.index);
  router.get('/home/index', controller.home.godds);
  router.get('s', '/search', uppercase , controller.search.index)
  router.redirect('/index', '/home/index', 302);
  router.resources('users', `/users/`, controller.users);
  router.post('/editor/upload' , controller.upload.index)

};
