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
const tablets_services_1 = __importDefault(require("../services/tablets.services"));
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allTablets = yield tablets_services_1.default.getAllTablets();
        if (!allTablets) {
            res.status(404).json({
                errType: '404',
                msg: 'Not Found: The specified entity does not exist',
            });
            return;
        }
        res.send(allTablets);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const getById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { tabletId } = req.params;
        const tablet = yield tablets_services_1.default.getTabletById(tabletId);
        if (!tablet) {
            res.status(404).json({
                errType: '404',
                msg: 'Not Found: The specified entity does not exist',
            });
            return;
        }
        res.send(tablet);
    }
    catch (error) {
        (0, handleErrors_1.handleErrors)(res, error);
    }
});
const tabletController = { getAll, getById };
exports.default = tabletController;
