import Phone from '../models/phone';
declare const phoneService: {
    getAllPhones: () => Promise<Phone[]>;
    getPhoneById: (phoneId: string) => Promise<Phone | null>;
};
export default phoneService;
