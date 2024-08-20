import { Model, Sequelize } from 'sequelize';
export default class User extends Model {
    id: string;
    favorites: Array<any>;
    cart: Array<any>;
    createdAt: Date;
    updatedAt: Date;
}
export declare const UserMap: (sequelize: Sequelize) => void;
