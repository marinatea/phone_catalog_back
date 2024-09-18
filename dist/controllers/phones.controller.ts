import { ControllerAction } from '../utils/types';
import { handleErrors } from '../utils/handleErrors';
import phoneService from '../services/phones.services';

const getAll: ControllerAction = async (req, res) => {
  try {
    const allPhones = await phoneService.getAllPhones();

    if (!allPhones) {
      res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified entity does not exist',
      });
      return;
    }
    res.send(allPhones);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getById: ControllerAction = async (req, res) => {
  try {
    const { phoneId } = req.params;
    const phone = await phoneService.getPhoneById(phoneId);

    if (!phone) {
      res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified entity does not exist',
      });
      return;
    }

    res.send(phone);
  } catch (error) {
    handleErrors(res, error);
  }
};

const phoneController = { getAll, getById };

export default phoneController;
