import { Op } from "sequelize";
import Product from "../models/product";
import { Sequelize } from "sequelize-typescript";

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

const getNewModelsProducts = async () => {
  return Product.findAll({
    order: [['year', 'DESC']],
    limit: 20,
  });
};


const getHotPricesProducts = async () => {
  return Product.findAll({
     attributes: {
      include: [
        [Sequelize.literal('"fullPrice" - "price"'), 'discountAmount']
      ]
    },
    order: [[Sequelize.literal('"discountAmount"'), 'DESC']],
    limit: 16,
  });
};


const productService = { getAllProducts, getRecommendedProducts, getHotPricesProducts, getNewModelsProducts };

export default productService;
