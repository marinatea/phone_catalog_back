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
const tablet_1 = __importDefault(require("../models/tablet"));
const getAllTablets = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield tablet_1.default.findAll();
    }
    catch (error) {
        console.error('Error fetching all tablets:', error);
        throw error;
    }
});
const getTabletById = (tabletId) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        return yield tablet_1.default.findByPk(tabletId);
    }
    catch (error) {
        console.error(`Error fetching tablet with ID ${tabletId}:`, error);
        throw error;
    }
});
const tabletService = { getAllTablets, getTabletById };
exports.default = tabletService;
