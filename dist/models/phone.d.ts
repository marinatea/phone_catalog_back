import { Model, Sequelize } from 'sequelize';
export default class Phone extends Model {
    id?: string;
    category: string;
    namespaceId?: string;
    name?: string;
    capacityAvailable?: string[];
    capacity?: string;
    priceRegular?: number;
    priceDiscount?: number;
    colorsAvailable?: string[];
    color?: string;
    images?: string[];
    description?: {
        title: string;
        text: string[];
    }[];
    screen?: string;
    resolution?: string;
    processor?: string;
    ram?: string;
    camera?: string;
    zoom?: string;
    cell?: string[];
}
export declare const PhoneMap: (sequelize: Sequelize) => void;
