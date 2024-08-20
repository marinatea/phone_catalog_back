import { Model, Sequelize } from "sequelize";
export declare class Order extends Model {
    id: string;
    productId: string;
    userId: string;
    quantity: number;
    price: number;
    status: string;
    readonly createdAt: Date;
    readonly updatedAt: Date;
}
export declare const orderMap: (sequelize: Sequelize) => void;
export default Order;
