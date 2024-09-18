import { ControllerAction } from '../utils/types';
import { handleErrors } from '../utils/handleErrors';
import tabletService from '../services/tablets.services';

const getAll: ControllerAction = async (req, res) => {
  try {
    const allTablets = await tabletService.getAllTablets();

    if (!allTablets) {
      res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified entity does not exist',
      });
      return;
    }
    res.send(allTablets);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getById: ControllerAction = async (req, res) => {
  try {
    const { tabletId } = req.params;
    const tablet = await tabletService.getTabletById(tabletId);

    if (!tablet) {
      res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified entity does not exist',
      });
      return;
    }

    res.send(tablet);
  } catch (error) {
    handleErrors(res, error);
  }
};

const tabletController = { getAll, getById };

export default tabletController;
