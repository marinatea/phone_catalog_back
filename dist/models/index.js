"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const accessory_1 = require("./accessory");
const phone_1 = require("./phone");
const product_1 = require("./product");
const sequelize_typescript_1 = require("sequelize-typescript");
const tablet_1 = require("./tablet");
const user_1 = require("./user");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
if (!process.env.DATABASE_URL) {
    throw new Error('DATABASE_URL is not defined in environment variables');
}
const sequelize = new sequelize_typescript_1.Sequelize(process.env.DATABASE_URL, {
    dialect: 'postgres',
    dialectOptions: {
        ssl: process.env.DATABASE_SSL === 'true' ? {
            require: true,
            rejectUnauthorized: false,
        } : false,
    },
    logging: false,
});
exports.sequelize = sequelize;
(0, product_1.ProductMap)(sequelize);
(0, phone_1.PhoneMap)(sequelize);
(0, accessory_1.AccessoryMap)(sequelize);
(0, tablet_1.TabletMap)(sequelize);
(0, user_1.UserMap)(sequelize);
