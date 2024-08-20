"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMap = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
}
exports.default = User;
const UserMap = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.STRING,
            primaryKey: true,
            allowNull: false,
        },
        favorites: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.JSONB),
            allowNull: false,
            defaultValue: [],
        },
        cart: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: false,
            defaultValue: {},
        },
        createdAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.fn('now'),
        },
        updatedAt: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.fn('now'),
        },
    }, {
        sequelize,
        tableName: 'Users',
        timestamps: false,
    });
    User.sync();
};
exports.UserMap = UserMap;
