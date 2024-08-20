import User from '../models/user';
declare const userService: {
    getUser: (userId: string) => Promise<User | null>;
    createUser: (userId: string) => Promise<User>;
    addToList: (user: User, newItem: any, type: "cart" | "favorites") => Promise<false | any[]>;
    removeFromList: (user: User, itemId: any, type: "cart" | "favorites") => Promise<false | any[]>;
    patchCartItemCount: (user: User, itemId: any, newCount: number) => Promise<false | any[]>;
};
export default userService;
