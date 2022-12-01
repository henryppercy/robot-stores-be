"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsService = void 0;
const DbService_1 = require("./DbService");
let productCollection = null;
DbService_1.dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));
class ProductsService {
    constructor() {
        this.getProducts = () => __awaiter(this, void 0, void 0, function* () {
            return yield productCollection.find({}).toArray()
                .then((products) => (products))
                .then((products) => {
                return {
                    message: "Products successfully received.",
                    success: 1,
                    data: products,
                };
            });
        });
        this.getProduct = (id) => __awaiter(this, void 0, void 0, function* () {
            return yield productCollection.find({ "id": id }).toArray()
                .then((product) => (product))
                .then((product) => {
                return {
                    message: "Product successfully received.",
                    success: 1,
                    data: product,
                };
            });
        });
    }
}
exports.productsService = new ProductsService;
//# sourceMappingURL=productsService.js.map