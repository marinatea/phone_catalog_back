"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TabletMap = void 0;
const sequelize_1 = require("sequelize");
class Tablet extends sequelize_1.Model {
}
exports.default = Tablet;
const TabletMap = (sequelize) => {
    Tablet.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
        },
        category: {
            type: sequelize_1.DataTypes.STRING(255)
        },
        namespaceId: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        name: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        capacityAvailable: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: true
        },
        capacity: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        priceRegular: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
        priceDiscount: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true
        },
        colorsAvailable: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: true
        },
        color: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        images: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: true
        },
        description: {
            type: sequelize_1.DataTypes.JSON,
            allowNull: true
        },
        screen: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        resolution: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        processor: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        ram: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        camera: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        zoom: {
            type: sequelize_1.DataTypes.STRING(255),
            allowNull: true
        },
        cell: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            allowNull: true
        }
    }, {
        sequelize,
        tableName: 'Tablets',
        timestamps: false
    });
    Tablet.sync();
};
exports.TabletMap = TabletMap;
