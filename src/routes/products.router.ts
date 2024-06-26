import express from 'express';
import productController from '../controllers/products.controller';
import Product from '../models/product';
import { handleErrors } from '../utils/handleErrors';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);

export default productRouter;