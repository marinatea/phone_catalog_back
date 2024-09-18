import Tablet from '../models/tablet';

const getAllTablets = async () => {
  try {
    return await Tablet.findAll();
  } catch (error) {
    console.error('Error fetching all tablets:', error);
    throw error;
  }
};

const getTabletById = async (tabletId: string) => {
  try {
    return await Tablet.findByPk(tabletId);
  } catch (error) {
    console.error(`Error fetching tablet with ID ${tabletId}:`, error);
    throw error;
  }
};

const tabletService = { getAllTablets, getTabletById };

export default tabletService;
