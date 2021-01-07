'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  const isUrl = app.middleware.middlewareOne({params: '888',});
  const auth = app.middleware.auth({ title: 'this is router.js  middleware' })
  router.resources('articles', `/articles/`, controller.articles); 
  router.resources('banner', `/banner/`, controller.banner); // 轮播图
  router.resources('animal_details', `/animal_details/`, controller.animalDetails);
  router.resources('animal_circles', `/animal_circles/`, controller.animalCircles);
  router.resources('animal_protect', `/animal_protect/`, controller.animalProtect); // 保护机构
  router.resources('feedback_list', `/feedback_list/`, controller.feedbackList);
  router.resources('about_lists', `/about_lists/`, controller.aboutLists);
  router.resources('new_list', `/new_list/`, controller.newList);
  router.resources('news_dynamic', `/news_dynamic/`, controller.newsDynamic);
  router.resources('user_pets', `/user_pets/`, controller.userPets);
  router.resources('user_lists', `/user_lists/`, controller.userLists);

  // router.get('/editor/upload' , controller.upload.index)
  router.post('/upload/video' , controller.upload.video)
  
  // router.get('/user/list/:id' , controller.users.detail)
};
