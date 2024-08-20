"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const product_1 = __importDefault(require("../models/product"));
const sequelize_typescript_1 = require("sequelize-typescript");
const types_1 = require("../utils/types");
const itemsPerPageOptions = [
    { value: 8, label: "8" },
    { value: 16, label: "16" },
    { value: 24, label: "24" },
    { value: 32, label: "32" },
    { value: Number.MAX_SAFE_INTEGER, label: "All" },
];
const getAllProducts = (...args_1) => __awaiter(void 0, [...args_1], void 0, function* (page = 1, limit = 10) {
    const offset = (page - 1) * limit;
    return product_1.default.findAll({
        offset,
        limit,
    });
});
const sortProducts = (categoryType_1, ...args_1) => __awaiter(void 0, [categoryType_1, ...args_1], void 0, function* (categoryType, sortType = "WITHOUT_SORT", startIndex = 1, limitIndex = 16) {
    let orderOptions = [];
    switch (sortType) {
        case types_1.SortType.AZ:
            orderOptions = [['name', 'ASC']];
            break;
        case types_1.SortType.ZA:
            orderOptions = [['name', 'DESC']];
            break;
        case types_1.SortType.LOW_TO_HIGH:
            orderOptions = [['price', 'ASC']];
            break;
        case types_1.SortType.HIGH_TO_LOW:
            orderOptions = [['price', 'DESC']];
            break;
        case types_1.SortType.NEWEST_TO_OLDEST:
            orderOptions = [['year', 'ASC']];
            break;
        case types_1.SortType.OLDEST_TO_NEWEST:
            orderOptions = [['year', 'DESC']];
            break;
        default:
            orderOptions = [['id', 'ASC']];
    }
    return yield product_1.default.findAll({
        where: { category: categoryType },
        offset: startIndex,
        limit: limitIndex,
        order: orderOptions,
    });
});
const getRecommendedProducts = (productId_1, ...args_1) => __awaiter(void 0, [productId_1, ...args_1], void 0, function* (productId, limit = 4) {
    return product_1.default.findAll({
        where: {
            id: {
                [sequelize_1.Op.ne]: productId,
            },
        },
        order: [["year", "DESC"]],
        limit,
    });
});
const getItemsPerPageOptions = () => {
    return itemsPerPageOptions;
};
const getNewModelsProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return product_1.default.findAll({
        order: [['year', 'DESC']],
        limit: 20,
    });
});
const getHotPricesProducts = () => __awaiter(void 0, void 0, void 0, function* () {
    return product_1.default.findAll({
        attributes: {
            include: [
                [sequelize_typescript_1.Sequelize.literal('"fullPrice" - "price"'), 'discountAmount']
            ]
        },
        order: [[sequelize_typescript_1.Sequelize.literal('"discountAmount"'), 'DESC']],
        limit: 16,
    });
});
const getProductsByQuery = (query) => __awaiter(void 0, void 0, void 0, function* () {
    return product_1.default.findAll({
        limit: 5,
        where: {
            name: sequelize_typescript_1.Sequelize.where(sequelize_typescript_1.Sequelize.fn('LOWER', sequelize_typescript_1.Sequelize.col('name')), 'LIKE', '%' + query.toLocaleLowerCase() + '%')
        }
    });
});
const productService = {
    getAllProducts,
    getRecommendedProducts,
    sortProducts,
    getItemsPerPageOptions,
    getHotPricesProducts,
    getNewModelsProducts,
    getProductsByQuery,
};
exports.default = productService;
