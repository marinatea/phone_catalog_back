import express from 'express';
import productController from '../controllers/products.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);

export default productRouter;
