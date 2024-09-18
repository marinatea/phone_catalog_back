import Accessory from '../models/accessory';

const getAllAccessories = async () => {
  return Accessory.findAll();
};

const getAccessoryById = async (accessoryId: string) => {
  return Accessory.findByPk(accessoryId);
};

const accessoryService = { getAllAccessories, getAccessoryById };

export default accessoryService;
