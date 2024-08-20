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
const order_service_1 = __importDefault(require("../services/order.service"));
const handleErrors_1 = require("../utils/handleErrors");
const getAllOrders = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const orders = yield order_service_1.default.getAllOrders();
        res.json(orders);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getOrderById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const order = yield order_service_1.default.getOrderById(orderId);
        if (order) {
            res.json(order);
        }
        else {
            res.status(404).json({
                errType: "404",
                msg: "Order not found",
            });
        }
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const createOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { productId, userId, quantity, price, status } = req.body;
    if (!productId || !userId || !quantity || !price || !status) {
        return res.status(400).json({
            errType: "400",
            msg: "All fields are required: productId, userId, quantity, price, status",
        });
    }
    try {
        const order = yield order_service_1.default.createOrder(req.body);
        res.status(201).json(order);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const updateOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const order = yield order_service_1.default.updateOrder(orderId, req.body);
        if (order) {
            res.json(order);
        }
        else {
            res.status(404).json({
                errType: "404",
                msg: "Order not found",
            });
        }
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const deleteOrder = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { orderId } = req.params;
        const order = yield order_service_1.default.deleteOrder(orderId);
        if (order) {
            res.json(order);
        }
        else {
            res.status(404).json({
                errType: "404",
                msg: "Order not found",
            });
        }
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const orderController = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};
exports.default = orderController;
