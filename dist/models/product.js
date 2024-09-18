"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductMap = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.default = Product;
const ProductMap = (sequelize) => {
    Product.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        itemId: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        fullPrice: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        price: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        screen: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        capacity: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        color: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        ram: {
            type: sequelize_1.DataTypes.STRING(255),
        },
        year: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        image: {
            type: sequelize_1.DataTypes.STRING(255),
        }
    }, {
        sequelize,
        tableName: 'Products',
        timestamps: false,
    });
    Product.sync();
};
exports.ProductMap = ProductMap;
