import User from '../models/user';

const getUser = async (userId: string) => {
  return User.findByPk(userId);
};

const createUser = async (userId: string) => {
  return User.create({ id: userId, favorites: [], cart: [] });
};

const addToList = async (user: User, newItem: any, type: 'cart' | 'favorites') => {
  try {
    user[type].push(newItem);

    await user.save();

    return user[type];
  } catch (error) {
    return false;
  }
};

const removeFromList = async (user: User, itemId: any, type: 'cart' | 'favorites') => {
  try {
    const itemIndex = user[type].findIndex((item) => (type === 'cart' ? item.id === itemId : item.itemId === itemId));

    if (itemIndex < 0) {
      return user[type];
    }

    user[type].splice(itemIndex, 1);

    await user.save();

    return user[type];
  } catch (error) {
    return false;
  }
};

const patchCartItemCount = async (user: User, itemId: any, newCount: number) => {
  try {
    const itemIndex = user.cart.findIndex((item) => item.id === itemId);

    if (itemIndex < 0) {
      return user.cart;
    }

    user.cart[itemIndex].count = newCount;

    await user.save();

    return user.cart;
  } catch (error) {
    return false;
  }
};

const userService = { getUser, createUser, addToList, removeFromList, patchCartItemCount };

export default userService;
