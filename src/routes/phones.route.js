"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const phones_controller_1 = __importDefault(require("../controllers/phones.controller"));
const phoneRouter = express_1.default.Router();
phoneRouter.get('/', phones_controller_1.default.getAll);
phoneRouter.get('/:phoneId', phones_controller_1.default.getById);
exports.default = phoneRouter;
