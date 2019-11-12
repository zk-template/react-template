const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        proxy('/idiom_recognition', {
            target: 'http://172.16.1.61:9011',
            changeOrigin: true,
        })
    );
}