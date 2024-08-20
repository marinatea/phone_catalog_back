import { Model, Sequelize } from 'sequelize';
export default class Product extends Model {
    id: number;
    category: string;
    itemId: string;
    name: string;
    fullPrice: number;
    price: number;
    screen: string;
    capacity: string;
    color: string;
    ram: string;
    year: number;
    image: string;
}
export declare const ProductMap: (sequelize: Sequelize) => void;
