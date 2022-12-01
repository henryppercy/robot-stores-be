"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsController = void 0;
const productsService_1 = require("../services/productsService");
class ProductsController {
    constructor() {
        this.getProducts = (req, res) => {
            productsService_1.productsService.getProducts()
                .then((products) => res.json(products));
        };
        this.getProduct = (req, res) => {
            console.log('Products controller: getProduct');
            const id = parseInt(req.params.id);
            productsService_1.productsService.getProduct(id)
                .then((product) => res.json(product));
        };
    }
}
exports.productsController = new ProductsController;
//# sourceMappingURL=productsController.js.map