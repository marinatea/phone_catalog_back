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
const product_1 = __importDefault(require("../models/product"));
const handleErrors_1 = require("../utils/handleErrors");
const products_services_1 = __importDefault(require("../services/products.services"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { page = 1, limit = 16 } = req.query;
        const parsedPage = parseInt(page, 10);
        const parsedLimit = parseInt(limit, 10);
        if (isNaN(parsedPage) ||
            isNaN(parsedLimit) ||
            parsedPage < 1 ||
            parsedLimit < 1) {
            return res.status(400).json({
                errType: "400",
                msg: "Invalid page or limit parameters",
            });
        }
        const products = yield products_services_1.default.getAllProducts(parsedPage, parsedLimit);
        res.json(products);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getSortedProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { category, sort, itemsPerPage, page } = req.query;
        const parsedPage = typeof page === "string" ? parseInt(page, 10) : 1;
        const parsedItemsPerPage = typeof itemsPerPage === "string" ? parseInt(itemsPerPage, 10) : 16;
        if (isNaN(parsedPage) ||
            parsedPage < 1 ||
            isNaN(parsedItemsPerPage) ||
            parsedItemsPerPage < 1) {
            return res.status(400).json({
                errType: "400",
                msg: "Invalid page or itemsPerPage parameters.",
            });
        }
        const startIndex = (parsedPage - 1) * parsedItemsPerPage;
        const limitIndex = parsedItemsPerPage;
        const items = yield products_services_1.default.sortProducts(category, sort, startIndex, limitIndex);
        res.json(items);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getProductId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = parseInt(req.params.id, 10);
        if (isNaN(productId)) {
            return res.status(400).json({
                errType: "400",
                msg: "Invalid product ID",
            });
        }
        const product = yield product_1.default.findByPk(productId);
        if (!product) {
            return res.status(404).json({
                errType: "404",
                msg: "Product not found",
            });
        }
        res.json(product);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getProductItemId = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { itemId } = req.query;
        if (!itemId) {
            return res.status(400).json({
                errType: "400",
                msg: "ItemId is required",
            });
        }
        const product = yield product_1.default.findOne({
            where: { itemId },
        });
        if (!product) {
            return res.status(404).json({
                errType: "404",
                msg: "Product not found",
            });
        }
        res.json(product);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getRecommended = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const productId = parseInt(req.params.id, 10);
        if (isNaN(productId)) {
            return res.status(400).json({
                errType: "400",
                msg: "Invalid product ID",
            });
        }
        const product = yield product_1.default.findByPk(productId);
        if (!product) {
            return res.status(404).json({
                errType: "404",
                msg: "Product not found",
            });
        }
        const recommendedProducts = yield products_services_1.default.getRecommendedProducts(productId);
        res.json(recommendedProducts);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getNewModelsProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_services_1.default.getNewModelsProducts();
        res.send(products);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getHotPricesProducts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const products = yield products_services_1.default.getHotPricesProducts();
        res.send(products);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getByQuery = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { query } = req.params;
    try {
        const allProducts = yield products_services_1.default.getProductsByQuery(query);
        if (!allProducts) {
            res.status(404).json({
                errType: "404",
                msg: "Product not found",
            });
            return;
        }
        res.send(allProducts);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const productController = {
    getAll,
    getRecommended,
    getProductId,
    getHotPricesProducts,
    getNewModelsProducts,
    getByQuery,
    getSortedProducts,
    getProductItemId,
};
exports.default = productController;
