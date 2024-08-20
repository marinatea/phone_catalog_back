import Accessory from '../models/accessory';
declare const accessoryService: {
    getAllAccessories: () => Promise<Accessory[]>;
    getAccessoryById: (accessoryId: string) => Promise<Accessory | null>;
};
export default accessoryService;
