import { Op } from "sequelize";
import Product from "../models/product";

const getAllProducts = async (page: number = 1, limit: number = 10) => {
  const offset = (page - 1) * limit;
  return Product.findAll({
    offset,
    limit,
  });
};

const getRecommendedProducts = async (productId: number, limit: number = 4) => {
  return Product.findAll({
    where: {
      id: {
        [Op.ne]: productId,
      },
    },
    order: [["year", "DESC"]],
    limit,
  });
};

const productService = { getAllProducts, getRecommendedProducts };

export default productService;
