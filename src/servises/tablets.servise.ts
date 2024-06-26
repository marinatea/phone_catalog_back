import Tablet from '../models/tablet';

const getAllTablets = async () => {
  return Tablet.findAll();
};

const getTabletById = async (tabletId: string) => {
  return Tablet.findByPk(tabletId);
};


const tabletService = { getAllTablets, getTabletById };

export default tabletService;