import { AccessoryMap } from './accessory';
import { PhoneMap } from './phone';
import { ProductMap } from './product';
import { Sequelize } from 'sequelize-typescript';
import { TabletMap } from './tablet';
import { UserMap } from './user';
import dotenv from 'dotenv';

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL is not defined in environment variables');
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: process.env.DATABASE_SSL === 'true' ? {
      require: true,
      rejectUnauthorized: false,
    } : false,
  },
  logging: false,
});

ProductMap(sequelize);
PhoneMap(sequelize);
AccessoryMap(sequelize);
TabletMap(sequelize);
UserMap(sequelize);

export { sequelize };
