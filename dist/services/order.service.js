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
const order_1 = __importDefault(require("../models/order"));
const calculateTotalPrice = (quantity, price) => {
    return quantity * price;
};
const getAllOrders = () => __awaiter(void 0, void 0, void 0, function* () {
    const orders = yield order_1.default.findAll();
    const ordersWithTotalPrice = orders.map(order => (Object.assign(Object.assign({}, order.toJSON()), { totalPrice: calculateTotalPrice(order.quantity, order.price) })));
    return ordersWithTotalPrice;
});
const getOrderById = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_1.default.findByPk(orderId);
    if (order) {
        const totalPrice = calculateTotalPrice(order.quantity, order.price);
        return Object.assign(Object.assign({}, order.toJSON()), { totalPrice });
    }
    return null;
});
const createOrder = (orderData) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_1.default.create(orderData);
    const totalPrice = calculateTotalPrice(order.quantity, order.price);
    return Object.assign(Object.assign({}, order.toJSON()), { totalPrice });
});
const updateOrder = (orderId, updatedOrder) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_1.default.findByPk(orderId);
    if (order) {
        yield order.update(updatedOrder);
        const totalPrice = calculateTotalPrice(order.quantity, order.price);
        return Object.assign(Object.assign({}, order.toJSON()), { totalPrice });
    }
    return null;
});
const deleteOrder = (orderId) => __awaiter(void 0, void 0, void 0, function* () {
    const order = yield order_1.default.findByPk(orderId);
    if (order) {
        yield order.destroy();
        return order;
    }
    return null;
});
const orderService = {
    getAllOrders,
    getOrderById,
    createOrder,
    updateOrder,
    deleteOrder,
};
exports.default = orderService;
