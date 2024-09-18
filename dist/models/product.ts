import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Product extends Model {
  public id!: number;
  public category!: string;
  public itemId!: string;
  public name!: string;
  public fullPrice!: number;
  public price!: number;
  public screen!: string;
  public capacity!: string;
  public color!: string;
  public ram!: string;
  public year!: number;
  public image!: string;
}

export const ProductMap = (sequelize: Sequelize) => {
  Product.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING(255),
    },
    itemId: {
      type: DataTypes.STRING(255),
    },
    name: {
      type: DataTypes.STRING(255),
    },
    fullPrice: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.INTEGER,
    },
    screen: {
      type: DataTypes.STRING(255),
    },
    capacity: {
      type: DataTypes.STRING(255),
    },
    color: {
      type: DataTypes.STRING(255),
    },
    ram: {
      type: DataTypes.STRING(255),
    },
    year: {
      type: DataTypes.INTEGER,
    },
    image: {
      type: DataTypes.STRING(255),
    }
  }, {
    sequelize,
    tableName: 'Products',
    timestamps: false,
  });

  Product.sync();
}
