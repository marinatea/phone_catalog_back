import express from 'express';
import productController from '../controllers/products.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/:id', productController.getProductId);
productRouter.get('/:id/recommended', productController.getRecommended);
productRouter.get('/new-models', productController.getNewModelsProducts);
productRouter.get('/hot-prices', productController.getHotPricesProducts);
productRouter.get('/search/:query', productController.getByQuery);

export default productRouter;
