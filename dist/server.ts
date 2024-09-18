import express, { Application } from 'express';

import accessoryRouter from './routes/accessories.router';
import bodyParser from 'body-parser';
import cors from 'cors';
import phoneRouter from './routes/phones.router';
import productRouter from './routes/products.router';
import { sequelize } from './models';
import tabletRouter from './routes/tablets.router';
import userRouter from './routes/users.router';
import { orderMap } from './models/order';
import orderRouter from './routes/order.router';

const app: Application = express();

app.use(bodyParser.json());
app.use(cors());

const PORT: number = parseInt(process.env.PORT as string, 10) || 5432;

orderMap(sequelize);

sequelize
  .sync()
  .then(() => {
    app.use('/products', productRouter);
    app.use('/tablets', tabletRouter);
    app.use('/accessories', accessoryRouter);
    app.use('/phones', phoneRouter);
    app.use('/users', userRouter);
    app.use("/orders", orderRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error: Error) => {
    console.error('Unable to connect to the database:', error);
  });
