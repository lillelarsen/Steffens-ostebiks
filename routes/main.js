const controller = require('../controllers/main');

module.exports = function(app) {
    app.get('/', controller.main);
    app.post('/', controller.createProduct);
}