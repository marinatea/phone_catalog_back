import Order from "../models/order";
import { OrderAttributes, OrderWithTotalPrice } from "../utils/types";
declare const orderService: {
    getAllOrders: () => Promise<OrderWithTotalPrice[]>;
    getOrderById: (orderId: string) => Promise<OrderWithTotalPrice | null>;
    createOrder: (orderData: Partial<OrderAttributes>) => Promise<OrderWithTotalPrice>;
    updateOrder: (orderId: string, updatedOrder: Partial<OrderAttributes>) => Promise<OrderWithTotalPrice | null>;
    deleteOrder: (orderId: string) => Promise<Order | null>;
};
export default orderService;
