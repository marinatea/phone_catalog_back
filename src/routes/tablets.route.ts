import express from 'express';
import tabletController from '../controllers/tablets.controller';

const tabletRouter = express.Router();

tabletRouter.get('/', tabletController.getAll);
tabletRouter.get('/:tabletId', tabletController.getById);

export default tabletRouter;