import express from 'express';
import productController from '../controllers/products.controller';
import Product from '../models/product';
import { handleErrors } from '../utils/handleErrors';

const productRouter = express.Router();

productRouter.get('/', productController.getAll);
// productRouter.get('/pagination', productController.getAllPagination);
productRouter.get('/', async (request, response) => {
  try {
    const page: number = parseInt(request.query.page as string, 10) || 1;
    const limit: number = parseInt(request.query.limit as string, 10) || 16;

    if (page < 1 || limit < 1) {
      response.status(404).json({
        errType: "404",
        msg: "Invalid page or limit parameters",
      })
    }

    const offset = (page - 1) * limit;

    const products = await Product.findAndCountAll({
      offset,
      limit,
    });

    response.json({
      page,
      limit,
      total: products.count,
      products: products.rows,
    });
  } catch (error) {
    handleErrors(response, error);
  }
});

export default productRouter;