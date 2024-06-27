import { DataTypes, Model, Sequelize } from 'sequelize';

export default class User extends Model {
  public id!: string;
  public favorites!: Array<any>;
  public cart!: Array<any>;
  public createdAt!: Date;
  public updatedAt!: Date;
}

export const UserMap = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      favorites: {
        type: DataTypes.ARRAY(DataTypes.JSONB),
        allowNull: false,
        defaultValue: [],
      },
      cart: {
        type: DataTypes.JSONB,
        allowNull: false,
        defaultValue: {},
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.fn('now'),
      },
    },
    {
      sequelize,
      tableName: 'Users',
      timestamps: false,
    }
  );
  User.sync();
};
