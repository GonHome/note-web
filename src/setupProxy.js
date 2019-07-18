// @ts-ignore
const proxy = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    proxy('/dm-manager/', {
      target: 'http://www.zhili-tech.com:18080/dm-manager/',
      ws: true,
      secure: false,
      pathRewrite: {
        '^/dm-manager/': '',
      },
    }),
  );
};
