import { productsController } from '../controllers/productsController';

export const routes = (app) => {
    app.get('/products', productsController.getProducts)
    app.get('/products/:id', productsController.getProduct)
}
