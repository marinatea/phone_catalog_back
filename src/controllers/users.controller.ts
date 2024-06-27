import { ControllerAction } from '../utils/types';
import { handleErrors } from '../utils/handleErrors';
import userService from '../services/users.services';

const getUser: ControllerAction = async (req, res) => {
  try {
    const { userId } = req.params;

    let user = await userService.getUser(userId);

    if (!user) {
      user = await userService.createUser(userId);
    }

    res.send(user);
  } catch (error) {
    handleErrors(res, error);
  }
};

const addToList: ControllerAction = async (req, res) => {
  try {
    const { userId, listType } = req.params;

    if (listType !== 'cart' && listType !== 'favorites') {
      res.status(400).json({
        errType: '400',
        msg: 'List type does not exist',
      });
      return;
    }

    let user = await userService.getUser(userId);

    if (!user) {
      user = await userService.createUser(userId);
    }

    const newList = await userService.addToList(user, req.body, listType);

    if (!newList) {
      res.status(500).json({
        errType: '500',
        msg: 'Could not add to list',
      });
      return;
    }

    user.save();

    res.send(newList);
  } catch (error) {
    handleErrors(res, error);
  }
};

const removeFromList: ControllerAction = async (req, res) => {
  try {
    const { userId, listType, itemId } = req.params;

    if (listType !== 'cart' && listType !== 'favorites') {
      res.status(400).json({
        errType: '400',
        msg: 'List type does not exist',
      });
      return;
    }

    const user = await userService.getUser(userId);

    let newList: any[] | false = [];

    if (user) {
      newList = await userService.removeFromList(user, itemId, listType);
    }

    if (!newList) {
      res.status(500).json({
        errType: '500',
        msg: 'Could not remove from list',
      });
      return;
    }

    res.send(newList);
  } catch (error) {
    handleErrors(res, error);
  }
};

const patchListElementCount: ControllerAction = async (req, res) => {
  try {
    const { userId, itemId, newCount } = req.params;

    if (isNaN(+newCount)) {
      res.status(400).json({
        errType: '400',
        msg: 'Bad count',
      });
      return;
    }

    const user = await userService.getUser(userId);

    if (!user) {
      res.status(404).json({
        errType: '404',
        msg: 'User not found',
      });
      return;
    }

    const newList = +newCount < 1 ? await userService.removeFromList(user, itemId, 'cart') : await userService.patchCartItemCount(user, itemId, +newCount);

    if (!newList) {
      res.status(500).json({
        errType: '500',
        msg: 'Could not patch cart',
      });
      return;
    }

    res.send(newList);
  } catch (error) {
    handleErrors(res, error);
  }
};

const userController = { getUser, addToList, removeFromList, patchListElementCount };

export default userController;
