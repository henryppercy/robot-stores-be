import Express from 'express';
import { productsService } from '../services/productsService';

class ProductsController {
    getProducts = (req: Express.Request, res: Express.Response) => {
        productsService.getProducts()
            .then((products) => res.json(products));
    }

    getProduct = (req: Express.Request, res: Express.Response) => {
        console.log('Products controller: getProduct');
        const id: number = parseInt(req.params.id);
        productsService.getProduct(id)
            .then((product) => res.json(product));
    }
}

export const productsController = new ProductsController;
