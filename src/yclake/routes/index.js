const loginController = require('../controller/login');

const router = require('koa-router')()

router.get('/', loginController.auth);
router.get('/login',loginController.renderLogin);
router.post('/login', loginController.validate, loginController.auth);
//.post('/', userController.validate, userController.login);
  // if (false) {
  //   await next();
  // }
// }, async (ctx, next) => {
//   ctx.body = 'OK';
// });


router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
module.exports = router
