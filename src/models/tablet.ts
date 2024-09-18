import { Model, Sequelize, DataTypes } from 'sequelize';

export default class Tablet extends Model {
  public id?: string;
  public category!: string;
  public namespaceId?: string;
  public name?: string;
  public capacityAvailable?: string[];
  public capacity?: string;
  public priceRegular?: number;
  public priceDiscount?: number;
  public colorsAvailable?: string[];
  public color?: string;
  public images?: string[];
  public description?: { title: string; text: string[] }[];
  public screen?: string;
  public resolution?: string;
  public processor?: string;
  public ram?: string;
  public camera?: string;
  public zoom?: string;
  public cell?: string[];
}

export const TabletMap = (sequelize: Sequelize) => {
  Tablet.init({
    id: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    category: {
      type: DataTypes.STRING(255),
    },
    namespaceId: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    capacityAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    capacity: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    priceRegular: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    priceDiscount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    colorsAvailable: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
    description: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    screen: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    resolution: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    processor: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    ram: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    camera: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    zoom: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    cell: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true,
    },
  }, {
    sequelize,
    tableName: 'Tablets',
    timestamps: false,
  });

  Tablet.sync();
};
