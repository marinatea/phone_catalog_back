"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accessories_controller_1 = __importDefault(require("../controllers/accessories.controller"));
const express_1 = __importDefault(require("express"));
const accessoryRouter = express_1.default.Router();
accessoryRouter.get('/', accessories_controller_1.default.getAll);
accessoryRouter.get('/:accessoryId', accessories_controller_1.default.getById);
exports.default = accessoryRouter;
