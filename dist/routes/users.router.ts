import express from 'express';
import userController from '../controllers/users.controller';

const userRouter = express.Router();

userRouter.get('/:userId', userController.getUser);
userRouter.post('/:userId/:listType', userController.addToList);
userRouter.delete('/:userId/:listType/:itemId', userController.removeFromList);
userRouter.patch('/:userId/cart/:itemId/:newCount', userController.patchListElementCount);

export default userRouter;
