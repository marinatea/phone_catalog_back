import express from 'express';
import productController from '../controllers/products.controller';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
productRouter.get('/new-models', productController.getNewModelsProducts);
productRouter.get('/hot-prices', productController.getHotPricesProducts);
productRouter.get('/search/:query', productController.getByQuery);
productRouter.get('/sort', productController.getSortedProducts);
productRouter.get('/item', productController.getProductItemId);
productRouter.get('/:id', productController.getProductId);
productRouter.get('/:id/recommended', productController.getRecommended);

export default productRouter;
