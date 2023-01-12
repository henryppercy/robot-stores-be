import { getProductsController, getProductController } from '../controllers/productsController';

export const routes = (app) => {
    app.get('/products', getProductsController)
    app.get('/products/:id', getProductController)
}
