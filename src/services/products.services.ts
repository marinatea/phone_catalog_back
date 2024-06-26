import { FindOptions, Op } from "sequelize";
import Product from "../models/product";
import { Sequelize } from "sequelize-typescript";
import { SortType } from "../utils/types";

const itemsPerPageOptions = [
  { value: 8, label: "8" },
  { value: 16, label: "16" },
  { value: 24, label: "24" },
  { value: 32, label: "32" },
  { value: Number.MAX_SAFE_INTEGER, label: "All" },
];

const getAllProducts = async (page: number = 1, limit: number = 10) => {
  const offset = (page - 1) * limit;
  return Product.findAll({
    offset,
    limit,
  });
};
// const getAllProducts = async ({
//   page = 1,
//   limit = 10,
//   categoryType = null,
//   sortType = "WITHOUT_SORT",
//   startIndex = 0,
//   limitIndex = 10,
//   query = null
// }: {
//   page?: number,
//   limit?: number,
//   categoryType?: string | null,
//   sortType?: string,
//   startIndex?: number,
//   limitIndex?: number,
//   query?: string | null
// }) => {
//   let whereClause: any = {};
//   let orderOptions: FindOptions<Product>['order'] = [];

//   // Apply category filter if provided
//   if (categoryType) {
//     whereClause.category = categoryType;
//   }

//   // Apply sorting based on sortType
//   switch (sortType) {
//     case "AZ":
//       orderOptions = [['name', 'ASC']];
//       break;
//     case "ZA":
//       orderOptions = [['name', 'DESC']];
//       break;
//     case "LOW_TO_HIGH":
//       orderOptions = [['year', 'ASC']];
//       break;
//     case "HIGH_TO_LOW":
//       orderOptions = [['year', 'DESC']];
//       break;
//     case "NEWEST_TO_OLDEST":
//       orderOptions = [['price', 'ASC']];
//       break;
//     case "OLDEST_TO_NEWEST":
//       orderOptions = [['price', 'DESC']];
//       break;
//     default:
//       orderOptions = [['id', 'ASC']];
//   }

//   // Apply query filter if provided
//   if (query) {
//     whereClause.name = Sequelize.where(
//       Sequelize.fn('LOWER', Sequelize.col('name')),
//       'LIKE',
//       '%' + query.toLowerCase() + '%'
//     );
//   }

//   // Calculate offset based on pagination
//   const offset = (page - 1) * limit;

//   // Fetch products based on parameters
//   const products = await Product.findAll({
//     where: whereClause,
//     offset: startIndex || offset,
//     limit: limitIndex || limit,
//     order: orderOptions,
//   });

//   return products;
// };


const sortProducts = async (
  categoryType: string,
  sortType: string = "WITHOUT_SORT",
  startIndex: number = 1,
  limitIndex: number = 16
) => {
  let orderOptions: FindOptions<Product>['order'] = [];

   switch (sortType) {
    case SortType.AZ:
      orderOptions = [['name', 'ASC']];
      break;
    case SortType.ZA:
      orderOptions = [['name', 'DESC']];
      break;
    case SortType.LOW_TO_HIGH:
      orderOptions = [['price', 'ASC']];
      break;
    case SortType.HIGH_TO_LOW:
      orderOptions = [['price', 'DESC']];
      break;
    case SortType.NEWEST_TO_OLDEST:
      orderOptions = [['year', 'ASC']];
      break;
    case SortType.OLDEST_TO_NEWEST:
      orderOptions = [['year', 'DESC']];
      break;
    default:
      orderOptions = [['id', 'ASC']];
  }

  return await Product.findAll({
    where: { category: categoryType },
    offset: startIndex,
    limit: limitIndex,
    order: orderOptions,
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

const getProductsByQuery= async(query: string) => {
    return Product.findAll({
        limit: 5,
        where: {
            name: Sequelize.where(Sequelize.fn('LOWER', Sequelize.col('name')), 'LIKE', '%' + query.toLocaleLowerCase() + '%')
        }
    })
}

const productService = {
  getAllProducts,
  getRecommendedProducts,
  sortProducts,
  getItemsPerPageOptions,
  getHotPricesProducts,
  getNewModelsProducts,
  getProductsByQuery,
};


export default productService;
