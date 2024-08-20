"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const tablets_controller_1 = __importDefault(require("../controllers/tablets.controller"));
const tabletRouter = express_1.default.Router();
tabletRouter.get('/', tablets_controller_1.default.getAll);
tabletRouter.get('/:tabletId', tablets_controller_1.default.getById);
exports.default = tabletRouter;
