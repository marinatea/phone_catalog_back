import Product from "../models/product";
declare const productService: {
    getAllProducts: (page?: number, limit?: number) => Promise<Product[]>;
    getRecommendedProducts: (productId: number, limit?: number) => Promise<Product[]>;
    sortProducts: (categoryType: string, sortType?: string, startIndex?: number, limitIndex?: number) => Promise<Product[]>;
    getItemsPerPageOptions: () => {
        value: number;
        label: string;
    }[];
    getHotPricesProducts: () => Promise<Product[]>;
    getNewModelsProducts: () => Promise<Product[]>;
    getProductsByQuery: (query: string) => Promise<Product[]>;
};
export default productService;
