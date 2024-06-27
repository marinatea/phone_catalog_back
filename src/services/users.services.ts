import User from '../models/user';

const getUser = async (userId: string) => {
  return User.findByPk(userId);
};

const createUser = async (userId: string) => {
  return User.create({ id: userId, favorites: [], cart: {} });
};

const addToList = async (user: User, newItem: any, type: 'cart' | 'favorites') => {
  try {
    if (type === 'cart') {
      if (!(newItem.id in user.cart)) {
        const newList = { ...user.cart, [newItem.id]: newItem };

        user.update({ cart: newList });
      }
    } else {
      if (!user.favorites.some((el) => el.itemId === newItem.itemId)) {
        user[type] = [...user[type], newItem];

        user.save();
      }
    }

    return user[type];
  } catch (error) {
    return false;
  }
};

const removeFromList = async (user: User, itemId: any, type: 'cart' | 'favorites') => {
  try {
    if (type === 'cart') {
      if (itemId in user.cart) {
        const newList = { ...user.cart };

        delete newList[itemId];

        user.update({ cart: newList });
      }
    } else {
      const itemIndex = user[type].findIndex((item) => item.itemId === itemId);

      if (itemIndex > -1) {
        user[type] = [...user[type].slice(0, itemIndex), ...user[type].slice(itemIndex + 1)];

        await user.save();
      }
    }

    return user[type];
  } catch (error) {
    return false;
  }
};

const patchCartItemCount = async (user: User, itemId: any, newCount: number) => {
  try {
    if (itemId in user.cart) {
      const newList = { ...user.cart };
      newList[itemId].count = newCount;

      user.update({ cart: newList });
    }

    return user.cart;
  } catch (error) {
    return false;
  }
};

const userService = { getUser, createUser, addToList, removeFromList, patchCartItemCount };

export default userService;
