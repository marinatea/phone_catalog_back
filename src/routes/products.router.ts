import express from 'express';
import productController from '../controllers/products.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getProductId);
productRouter.get('/:id/recommended', productController.getRecommended);

export default productRouter;
