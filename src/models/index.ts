import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import { ProductMap } from "./product";
import { PhoneMap } from "./phone";
import { AccessoryMap } from "./accessory";
import { TabletMap } from "./tablet";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

ProductMap(sequelize);
PhoneMap(sequelize);
AccessoryMap(sequelize);
TabletMap(sequelize);

export { sequelize };
