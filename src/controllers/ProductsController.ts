import Express from 'express';
import { productsService } from '../services/productsService';

class ProductsController {
    getProducts = (req: Express.Request, res: Express.Response) => {
        productsService.getProducts()
            .then((productsRes) => res.json(productsRes));
    }

    getProduct = (req: Express.Request, res: Express.Response) => {
        const id: number = parseInt(req.params.id);
        productsService.getProduct(id)
            .then((productRes) => res.json(productRes));
    }
}

export const productsController = new ProductsController;
