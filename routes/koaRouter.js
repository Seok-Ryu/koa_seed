const Router = require('koa-router');
const router = new Router();

router.get('/', (ctx) => {
    ctx.body = 'api missing';
});


router.get('/stores', (ctx) => {
    ctx.body = 'print store list';
});

router.get('/stores/:id?', (ctx) => {
    ctx.body = `print store ${ctx.params.id}`;
});


module.exports = router;
