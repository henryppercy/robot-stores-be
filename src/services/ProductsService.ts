import { dbService } from './DbService';

let productCollection = null;
dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));

class ProductsService {
    getProducts = async () => {
        return await productCollection.find( {} ).toArray()
            .then((products) => (products))
            .then((products) => {
                return {
                    message: "Products successfully received.",
                    success: 1,
                    data: products,
                };
            });
    }

    getProduct = async (id: number) => {
            return await productCollection.find( {"id" : id} ).toArray()
            .then((product) => (product))
            .then((product) => {
                return {
                    message: "Product successfully received.",
                    success: 1,
                    data: product,
                };
        });

    }
}

export const productsService = new ProductsService;
