import { dbService } from './DbService';

let productCollection = null;
dbService.connectToDB()
    .then((db) => productCollection = db.collection('products'));

class ProductsService {
    getProducts = async () => {
        return await productCollection.find( {} ).toArray()
            .then((products: any) => (products))
            .then((products: any) => {
                return {
                    message: "Products successfully received.",
                    success: 1,
                    data: products,
                };
            });
    }

    getProduct = async (id: number) => {
            return await productCollection.find( {"id" : id} ).toArray()
            .then((product: any) => (product))
            .then((product: any) => {
                return {
                    message: "Product successfully received.",
                    success: 1,
                    data: product,
                };
        });

    }
}

export const productsService = new ProductsService;
