import { Column, DataType, Model, Table } from "sequelize-typescript";

@Table({
  tableName: "Products",
  modelName: "Product",
})
class Product extends Model {
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
  })
  id!: number;

  @Column(DataType.STRING)
  category!: string;

  @Column({
    type: DataType.STRING,
  })
  itemId!: string;

  @Column(DataType.STRING)
  name!: string;

  @Column(DataType.INTEGER)
  fullPrice!: number;

  @Column(DataType.INTEGER)
  price!: number;

  @Column(DataType.STRING)
  screen!: string;

  @Column(DataType.STRING)
  capacity!: string;

  @Column(DataType.STRING)
  color!: string;

  @Column(DataType.STRING)
  ram!: string;

  @Column(DataType.INTEGER)
  year!: number;

  @Column(DataType.STRING)
  image!: string;
}

export default Product;
