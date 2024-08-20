import Tablet from '../models/tablet';
declare const tabletService: {
    getAllTablets: () => Promise<Tablet[]>;
    getTabletById: (tabletId: string) => Promise<Tablet | null>;
};
export default tabletService;
