"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const users_controller_1 = __importDefault(require("../controllers/users.controller"));
const userRouter = express_1.default.Router();
userRouter.get('/:userId', users_controller_1.default.getUser);
userRouter.post('/:userId/:listType', users_controller_1.default.addToList);
userRouter.delete('/:userId/:listType/:itemId', users_controller_1.default.removeFromList);
userRouter.patch('/:userId/cart/:itemId/:newCount', users_controller_1.default.patchListElementCount);
exports.default = userRouter;
