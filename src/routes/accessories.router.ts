import accessoryController from '../controllers/accessories.controller';
import express from 'express';

const accessoryRouter = express.Router();

accessoryRouter.get('/', accessoryController.getAll);
accessoryRouter.get('/:accessoryId', accessoryController.getById);

export default accessoryRouter;
