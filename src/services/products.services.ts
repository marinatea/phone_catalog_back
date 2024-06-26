import { Op } from "sequelize";
import Product from "../models/product";
import { OrderItem } from "../utils/types";
import { Sequelize } from "sequelize-typescript";

const itemsPerPageOptions = [
  { value: 8, label: "8" },
  { value: 16, label: "16" },
  { value: 24, label: "24" },
  { value: 32, label: "32" },
  { value: Number.MAX_SAFE_INTEGER, label: "All" },
];

const getAllProducts = async (
  page: number = 1,
  limit: number = 16,
  sort: string = "WITHOUT_SORT",
  category: string
) => {
  const offset = (page - 1) * limit;
  let order: OrderItem[] = [];

  switch (sort) {
    case "AZ":
      order = [{ column: "name", direction: "ASC" }];
      break;
    case "ZA":
      order = [{ column: "name", direction: "DESC" }];
      break;
    case "LOW_TO_HIGH":
      order = [{ column: "priceDiscount", direction: "ASC" }];
      break;
    case "HIGH_TO_LOW":
      order = [{ column: "priceDiscount", direction: "DESC" }];
      break;
    case "NEWEST_TO_OLDEST":
      order = [{ column: "year", direction: "DESC" }];
      break;
    case "OLDEST_TO_NEWEST":
      order = [{ column: "year", direction: "ASC" }];
      break;
    default:
      break;
  }

  return Product.findAndCountAll({
    offset,
    limit,
    order: order.map((item) => [item.column, item.direction]),
    where: {
      category,
    },
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

const getItemsPerPageOptions = () => {
  return itemsPerPageOptions;
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

const productService = {
  getAllProducts,
  getRecommendedProducts,
  getItemsPerPageOptions,
  getHotPricesProducts,
  getNewModelsProducts,
};


export default productService;
