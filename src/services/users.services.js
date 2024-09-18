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
const user_1 = __importDefault(require("../models/user"));
const getUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.default.findByPk(userId);
});
const createUser = (userId) => __awaiter(void 0, void 0, void 0, function* () {
    return user_1.default.create({ id: userId, favorites: [], cart: {} });
});
const addToList = (user, newItem, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (type === 'cart') {
            if (!(newItem.id in user.cart)) {
                const newList = Object.assign(Object.assign({}, user.cart), { [newItem.id]: newItem });
                user.update({ cart: newList });
            }
        }
        else {
            if (!user.favorites.some((el) => el.itemId === newItem.itemId)) {
                user[type] = [...user[type], newItem];
                user.save();
            }
        }
        return user[type];
    }
    catch (error) {
        return false;
    }
});
const removeFromList = (user, itemId, type) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (type === 'cart') {
            if (itemId in user.cart) {
                const newList = Object.assign({}, user.cart);
                delete newList[itemId];
                user.update({ cart: newList });
            }
        }
        else {
            const itemIndex = user[type].findIndex((item) => item.itemId === itemId);
            if (itemIndex > -1) {
                user[type] = [...user[type].slice(0, itemIndex), ...user[type].slice(itemIndex + 1)];
                yield user.save();
            }
        }
        return user[type];
    }
    catch (error) {
        return false;
    }
});
const patchCartItemCount = (user, itemId, newCount) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (itemId in user.cart) {
            const newList = Object.assign({}, user.cart);
            newList[itemId].count = newCount;
            user.update({ cart: newList });
        }
        return user.cart;
    }
    catch (error) {
        return false;
    }
});
const userService = { getUser, createUser, addToList, removeFromList, patchCartItemCount };
exports.default = userService;
