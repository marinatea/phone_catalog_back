import { Request, Response } from "express";
declare const orderController: {
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getOrderById: (req: Request, res: Response) => Promise<void>;
    createOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateOrder: (req: Request, res: Response) => Promise<void>;
    deleteOrder: (req: Request, res: Response) => Promise<void>;
};
export default orderController;
