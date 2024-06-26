import express from 'express';
import accessoryController from '../controllers/accessories.controller';

const accessoryRouter = express.Router();

accessoryRouter.get('/', accessoryController.getAll);
accessoryRouter.get('/:accessoryId', accessoryController.getById);

export default accessoryRouter;