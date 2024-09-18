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
const handleErrors_1 = require("../utils/handleErrors");
const users_services_1 = __importDefault(require("../services/users.services"));
const getUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId } = req.params;
        let user = yield users_services_1.default.getUser(userId);
        if (!user) {
            user = yield users_services_1.default.createUser(userId);
        }
        res.send(user);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const addToList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, listType } = req.params;
        if (listType !== 'cart' && listType !== 'favorites') {
            res.status(400).json({
                errType: '400',
                msg: 'List type does not exist',
            });
            return;
        }
        let user = yield users_services_1.default.getUser(userId);
        if (!user) {
            user = yield users_services_1.default.createUser(userId);
        }
        const newList = yield users_services_1.default.addToList(user, req.body, listType);
        if (!newList) {
            res.status(500).json({
                errType: '500',
                msg: 'Could not add to list',
            });
            return;
        }
        user.save();
        res.send(newList);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const removeFromList = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, listType, itemId } = req.params;
        if (listType !== 'cart' && listType !== 'favorites') {
            res.status(400).json({
                errType: '400',
                msg: 'List type does not exist',
            });
            return;
        }
        const user = yield users_services_1.default.getUser(userId);
        let newList = [];
        if (user) {
            newList = yield users_services_1.default.removeFromList(user, itemId, listType);
        }
        if (!newList) {
            res.status(500).json({
                errType: '500',
                msg: 'Could not remove from list',
            });
            return;
        }
        res.send(newList);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const patchListElementCount = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { userId, itemId, newCount } = req.params;
        if (isNaN(+newCount)) {
            res.status(400).json({
                errType: '400',
                msg: 'Bad count',
            });
            return;
        }
        const user = yield users_services_1.default.getUser(userId);
        if (!user) {
            res.status(404).json({
                errType: '404',
                msg: 'User not found',
            });
            return;
        }
        const newList = +newCount < 1 ? yield users_services_1.default.removeFromList(user, itemId, 'cart') : yield users_services_1.default.patchCartItemCount(user, itemId, +newCount);
        if (!newList) {
            res.status(500).json({
                errType: '500',
                msg: 'Could not patch cart',
            });
            return;
        }
        res.send(newList);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const userController = { getUser, addToList, removeFromList, patchListElementCount };
exports.default = userController;
