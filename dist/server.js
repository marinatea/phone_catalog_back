"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accessories_route_1 = __importDefault(require("./routes/accessories.route"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const phones_route_1 = __importDefault(require("./routes/phones.route"));
const products_router_1 = __importDefault(require("./routes/products.router"));
const models_1 = require("./models");
const tablets_route_1 = __importDefault(require("./routes/tablets.route"));
const users_router_1 = __importDefault(require("./routes/users.router"));
const order_1 = require("./models/order");
const order_router_1 = __importDefault(require("./routes/order.router"));
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const PORT = parseInt(process.env.PORT, 10) || 3000;
(0, order_1.orderMap)(models_1.sequelize);
models_1.sequelize
    .sync()
    .then(() => {
    app.use('/products', products_router_1.default);
    app.use('/tablets', tablets_route_1.default);
    app.use('/accessories', accessories_route_1.default);
    app.use('/phones', phones_route_1.default);
    app.use('/users', users_router_1.default);
    app.use("/orders", order_router_1.default);
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
