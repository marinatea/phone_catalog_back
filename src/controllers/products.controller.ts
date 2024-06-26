import productService from '../servises/products.servise';
import { handleErrors } from '../utils/handleErrors';
import { ControllerAction } from '../utils/types';


const getAll: ControllerAction = async(req, res) => {
    try {
        const { page = 1, limit = 16 } = req.query;

        const parsedPage = parseInt(page as string, 10);
        const parsedLimit = parseInt(limit as string, 10);

        if (isNaN(parsedPage) || isNaN(parsedLimit) || parsedPage < 1 || parsedLimit < 1) {
            return res.status(400).json({
                errType: "400",
                msg: "Invalid page or limit parameters"
            });
        }

        const { count, rows } = await productService.getAllProducts(parsedPage, parsedLimit);

        res.json({
            page: parsedPage,
            limit: parsedLimit,
            total: count,
            products: rows,
        });
    } catch (error) {
        handleErrors(res,error)
    }
};

const productController = {getAll};

export default productController;