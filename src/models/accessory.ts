import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "Accessories",
  modelName: "Accessory",
})
export class Accessory extends Model {
  @Column({
    primaryKey: true,
    type: DataType.STRING,
  })
  id?: string;

  @Column(DataType.STRING)
  category!: string;

  @Column(DataType.STRING)
  namespaceId?: string;

  @Column(DataType.STRING)
  name?: string;

  @Column(DataType.ARRAY(DataType.STRING))
  capacityAvailable?: string[];

  @Column(DataType.STRING)
  capacity?: string;

  @Column(DataType.INTEGER)
  priceRegular?: number;

  @Column(DataType.INTEGER)
  priceDiscount?: number;

  @Column(DataType.ARRAY(DataType.STRING))
  colorsAvailable?: string[];

  @Column(DataType.STRING)
  color?: string;

  @Column(DataType.ARRAY(DataType.STRING))
  images?: string[];

  @Column(DataType.JSON)
  description?: { title: string; text: string[] }[];

  @Column(DataType.STRING)
  screen?: string;

  @Column(DataType.STRING)
  resolution?: string;

  @Column(DataType.STRING)
  processor?: string;

  @Column(DataType.STRING)
  ram?: string;

  @Column(DataType.STRING)
  camera?: string;

  @Column(DataType.STRING)
  zoom?: string;

  @Column(DataType.ARRAY(DataType.STRING))
  cell?: string[];
}

export default Accessory;
