"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const productsController_1 = require("../controllers/productsController");
const routes = (app) => {
    app.get('/products', productsController_1.productsController.getProducts);
    app.get('/products/:id', productsController_1.productsController.getProduct);
};
exports.routes = routes;
//# sourceMappingURL=routes.js.map