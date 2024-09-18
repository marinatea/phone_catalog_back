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
const accessories_services_1 = __importDefault(require("../services/accessories.services"));
const handleErrors_1 = require("../utils/handleErrors");
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allAccessories = yield accessories_services_1.default.getAllAccessories();
        if (!allAccessories) {
            res.status(404).json({
                errType: '404',
                msg: 'Not Found: The specified entity does not exist',
            });
            return;
        }
        res.send(allAccessories);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { accessoryId } = req.params;
        const accessory = yield accessories_services_1.default.getAccessoryById(accessoryId);
        if (!accessory) {
            res.status(404).json({
                errType: '404',
                msg: 'Not Found: The specified entity does not exist',
            });
            return;
        }
        res.send(accessory);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const accessoryController = { getAll, getById };
exports.default = accessoryController;
