"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controller_1 = __importDefault(require("../controllers/products.controller"));
const productRouter = express_1.default.Router();
productRouter.get('/', products_controller_1.default.getAll);
productRouter.get('/new-models', products_controller_1.default.getNewModelsProducts);
productRouter.get('/hot-prices', products_controller_1.default.getHotPricesProducts);
productRouter.get('/search/:query', products_controller_1.default.getByQuery);
productRouter.get('/sort', products_controller_1.default.getSortedProducts);
productRouter.get('/item', products_controller_1.default.getProductItemId);
productRouter.get('/:id', products_controller_1.default.getProductId);
productRouter.get('/:id/recommended', products_controller_1.default.getRecommended);
exports.default = productRouter;
