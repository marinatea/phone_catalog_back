import express, { Application, Request, Response } from "express";

import bodyParser from "body-parser";
import { sequelize } from "./models";
import productRouter from "./routes/products.router";
import { handleErrors } from "./utils/handleErrors";
import Product from "./models/product";

const app: Application = express();

app.use(bodyParser.json());

const PORT: number = parseInt(process.env.PORT as string, 10) || 3000;

sequelize
  .sync()
  .then(() => {
    app.use('/products', productRouter);
    
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error("Unable to connect to the database:", error);
  });
