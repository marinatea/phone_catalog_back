import Phone from '../models/phone';

const getAllPhones = async () => {
  return Phone.findAll();
};

const getPhoneById = async (phoneId: string) => {
  return Phone.findByPk(phoneId);
};

const phoneService = { getAllPhones, getPhoneById};

export default phoneService;