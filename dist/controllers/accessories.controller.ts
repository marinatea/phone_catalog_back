import { ControllerAction } from '../utils/types';
import accessoryService from '../services/accessories.services';
import { handleErrors } from '../utils/handleErrors';

const getAll: ControllerAction = async (req, res) => {
  try {
    const allAccessories = await accessoryService.getAllAccessories();

    if (!allAccessories) {
      res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified entity does not exist',
      });
      return;
    }
    res.send(allAccessories);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getById: ControllerAction = async (req, res) => {
  try {
    const { accessoryId } = req.params;
    const accessory = await accessoryService.getAccessoryById(accessoryId);

    if (!accessory) {
      res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified entity does not exist',
      });
      return;
    }

    res.send(accessory);
  } catch (error) {
    handleErrors(res, error);
  }
};

const accessoryController = { getAll, getById };

export default accessoryController;
