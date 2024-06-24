import { Sequelize } from "sequelize-typescript";
import dotenv from "dotenv";
import Product from "./product";

dotenv.config();

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined in environment variables");
}

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  models: [Product], // Register your models here
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
  logging: false,
});

export { sequelize };
