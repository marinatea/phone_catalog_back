import { ControllerAction } from "../utils/types";
import Product from "../models/product";
import { handleErrors } from "../utils/handleErrors";
import productService from "../services/products.services";

const getAll: ControllerAction = async (req, res) => {
  try {
    const { page = 1, limit = 16 } = req.query;
    const parsedPage = parseInt(page as string, 10);
    const parsedLimit = parseInt(limit as string, 10);

    if (isNaN(parsedPage) || isNaN(parsedLimit) || parsedPage < 1 || parsedLimit < 1) {
      return res.status(400).json({
        errType: "400",
        msg: "Invalid page or limit parameters",
      });
    }

    const products = await productService.getAllProducts(parsedPage, parsedLimit);

    res.json(products);
  } catch (error) {
    handleErrors(res, error);
  }
};

// const getAll: ControllerAction = async (req, res) => {
//   try {
//     const { page = 1, limit = 16 } = req.query;
//     const { productCategory, sortType, start, limit: paramLimit, query } = req.params;

//     const parsedPage = parseInt(page as string, 10);
//     const parsedLimit = parseInt(limit as string, 10);
//     const parsedStartIndex = +start;
//     const parsedLimitIndex = +paramLimit;

//     let items;

//     // Call getAll function with appropriate parameters based on request
//     if (productCategory !== undefined && sortType !== undefined && parsedStartIndex !== undefined && parsedLimitIndex !== undefined) {
//       items = await productService.getAllProducts({
//         page: parsedPage,
//         limit: parsedLimit,
//         categoryType: productCategory,
//         sortType,
//         startIndex: parsedStartIndex,
//         limitIndex: parsedLimitIndex,
//       });
//     } else if (query !== undefined) {
//       items = await productService.getAllProducts({
//         page: parsedPage,
//         limit: parsedLimit,
//         query,
//       });
//     } else {
//       items = await productService.getAllProducts({
//         page: parsedPage,
//         limit: parsedLimit,
//       });
//     }

//     res.json(items);
//   } catch (error) {
//     handleErrors(res, error);
//   }
// };

const getSortedProducts: ControllerAction= async (req, res) => {
  try {
      const { category, sort, itemsPerPage, page } = req.query;
      const parsedPage = typeof page === 'string' ? parseInt(page, 10) : 1;
      const parsedItemsPerPage = typeof itemsPerPage === 'string' ? parseInt(itemsPerPage, 10) : 16;

      if (isNaN(parsedPage) || parsedPage < 1 || isNaN(parsedItemsPerPage) || parsedItemsPerPage < 1) {
        return res.status(400).json({
          errType: "400",
          msg: 'Invalid page or itemsPerPage parameters.',
        });
      }

      const startIndex = (parsedPage - 1) * parsedItemsPerPage;
      const limitIndex = parsedItemsPerPage;

      const items = await productService.sortProducts(category as string, sort as string, startIndex, limitIndex);
      res.json(items);
    } catch (error) {
        handleErrors(res, error);
    }
};


const getProductId: ControllerAction = async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);

    if (isNaN(productId)) {
      return res.status(400).json({
        errType: "400",
        msg: "Invalid product ID",
      });
    }

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({
        errType: "404",
        msg: "Product not found",
      });
    }

    res.json(product);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getRecommended: ControllerAction = async (req, res) => {
  try {
    const productId = parseInt(req.params.id, 10);

    if (isNaN(productId)) {
      return res.status(400).json({
        errType: "400",
        msg: "Invalid product ID",
      });
    }

    const product = await Product.findByPk(productId);

    if (!product) {
      return res.status(404).json({
        errType: "404",
        msg: "Product not found",
      });
    }

    const recommendedProducts = await productService.getRecommendedProducts(
      productId
    );

    res.json(recommendedProducts);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getNewModelsProducts: ControllerAction = async (req, res) => {
  try {
    const products = await productService.getNewModelsProducts();
    res.send(products);
  } catch (error) {
    handleErrors(res, error);
  }
};


const getHotPricesProducts: ControllerAction = async (req, res) => {
  try {
    const products = await productService.getHotPricesProducts();
    res.send(products);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getByQuery: ControllerAction = async(req, res) => {
    const { query } = req.params
    try {
        const allProducts = await productService.getProductsByQuery(query);

        if (!allProducts) {
          res.status(404).json({
            errType: "404",
            msg: "Product not found",
          });
          return;
        }
        res.send(allProducts);
    } catch (error) {
      handleErrors(res, error);
    }
}

const productController = { getAll, getRecommended, getProductId, getHotPricesProducts, getNewModelsProducts, getByQuery, getSortedProducts };

export default productController;
