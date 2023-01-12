import Express from 'express';
import { getProducts, getProduct } from '../services/productsService';

export const getProductsController = (req: Express.Request, res: Express.Response) => {
    getProducts()
        .then((productsRes) => res.json(productsRes));
}

export const getProductController = (req: Express.Request, res: Express.Response) => {
    const id: number = parseInt(req.params.id);
    getProduct(id)
        .then((productRes) => res.json(productRes));
}
