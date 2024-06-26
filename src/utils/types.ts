import { Request, Response } from "express";

export type ControllerAction = (req: Request, res: Response) => void;

export interface OrderItem {
  column: string;
  direction: "ASC" | "DESC";
}
