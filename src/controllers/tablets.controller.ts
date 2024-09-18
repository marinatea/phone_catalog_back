import { Request, Response } from 'express';
import tabletService from '../services/tablets.services';
import { handleErrors } from '../utils/handleErrors'; // Zakładam, że masz funkcję handleErrors

const getAll = async (req: Request, res: Response) => {
  try {
    const allTablets = await tabletService.getAllTablets();

    if (!allTablets || allTablets.length === 0) {
      return res.status(404).json({
        errType: '404',
        msg: 'Not Found: No tablets found',
      });
    }

    res.json(allTablets);
  } catch (error) {
    handleErrors(res, error);
  }
};

const getById = async (req: Request, res: Response) => {
  try {
    const { tabletId } = req.params;
    const tablet = await tabletService.getTabletById(tabletId);

    if (!tablet) {
      return res.status(404).json({
        errType: '404',
        msg: 'Not Found: The specified tablet does not exist',
      });
    }

    res.json(tablet);
  } catch (error) {
    handleErrors(res, error);
  }
};

const tabletController = { getAll, getById };

export default tabletController;
