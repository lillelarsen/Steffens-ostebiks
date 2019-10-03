const controller = require('../controllers/products');

module.exports = function(app) {
    app.get('/produkter', controller.getAllProducts);
    app.get('/produkter/rediger/:id', controller.getOneProduct);
    app.post('/produkter/rediger/:id', controller.editOneProduct);
    app.get('/produkter/slet/:id', controller.deleteOneProduct);
}