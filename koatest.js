const Koa = require('koa');
const Router = require('koa-router');
const bodyParser = require('koa-bodyparser');
const crypto = require('crypto');

const koaRouter = require('./routes/koaRouter');


const app = new Koa();
const router = new Router();


app.use(bodyParser());

router.use('/apis', koaRouter.routes());


const password = 'abc123';
const secret = 'MySecretKey1$1$234';

const hashed = crypto.createHmac('sha256', secret).update(password).digest('hex');

console.log(hashed);




app.use(router.routes()).use(router.allowedMethods);

app.listen(4000, () => {
    console.log('listen 4000');
});