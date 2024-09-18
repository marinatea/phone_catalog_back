"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const accessories_router_1 = __importDefault(require("./routes/accessories.router"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const phones_router_1 = __importDefault(require("./routes/phones.router"));
const products_router_1 = __importDefault(require("./routes/products.router"));
const models_1 = require("./models");
const tablets_router_1 = __importDefault(require("./routes/tablets.router"));
const users_router_1 = __importDefault(require("./routes/users.router"));
const order_1 = require("./models/order");
const order_router_1 = __importDefault(require("./routes/order.router"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use((0, cors_1.default)());
const PORT = parseInt(process.env.PORT, 10) || 3000;
(0, order_1.orderMap)(models_1.sequelize);
app.get('/', (req, res) => {
    res.send('API is running on http://localhost:' + PORT);
});
models_1.sequelize
    .sync()
    .then(() => {
    app.use('/products', products_router_1.default);
    app.use('/tablets', tablets_router_1.default);
    app.use('/accessories', accessories_router_1.default);
    app.use('/phones', phones_router_1.default);
    app.use('/users', users_router_1.default);
    app.use("/orders", order_router_1.default);
    app.listen(PORT, () => {
        console.log(`Server is running on port http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('Unable to connect to the database:', error);
});
