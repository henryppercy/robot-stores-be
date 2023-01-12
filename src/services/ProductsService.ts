import { connectToDB } from './DbService';

let productCollection = null;
connectToDB()
    .then((db) => productCollection = db.collection('products'));

export const getProducts = async () => {
    return await productCollection.find( {} ).toArray()
        .then((products) => {
            return {
                message: "Products successfully received.",
                success: 1,
                data: products,
            };
        });
}

export const getProduct = async (id: number) => {
        return await productCollection.find( {"id" : id} ).toArray()
        .then((product) => {
            return {
                message: "Product successfully received.",
                success: 1,
                data: product,
            };
    });
}
