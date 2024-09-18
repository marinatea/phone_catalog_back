import express from 'express';
import phoneController from '../controllers/phones.controller';

const phoneRouter = express.Router();

phoneRouter.get('/', phoneController.getAll);
phoneRouter.get('/:phoneId', phoneController.getById);

export default phoneRouter;
