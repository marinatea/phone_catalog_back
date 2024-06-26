import Product from "../models/product";


const getAllProducts = async (page: number = 1, limit: number = 10) => {
    const offset = (page - 1) * limit;
    return Product.findAndCountAll({
        offset,
        limit,
    });
};
const productService = {getAllProducts};

export default productService;