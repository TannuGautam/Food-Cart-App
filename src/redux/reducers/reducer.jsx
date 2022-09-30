const INIT_State = {
  carts: [],
};

export const cartreducer = (state = INIT_State, action) => {
  switch (action.type) {
    case "ADD_CART":
      const itemIndex = state.carts.findIndex(
        (item) => item.id === action.payload.id
      );
      if (itemIndex >= 0) {
        state.carts[itemIndex].qnty += 1;
      } else {
        const temp = { ...action.payload, qnty: 1 };
        return {
          ...state,
          carts: [...state.carts, action.payload],
        };
      }

    case "DELETE_CART":
      const data = state.carts.filter((el) => el.id !== action.payload);
      return {
        ...state,
        carts: data,
      };

    case "REMOVE_ONE":
      const itemIndexDec = state.carts.findIndex(
        (el) => el.id == action.payload.id
      );

      if (state.carts[itemIndexDec].qnty >= 1) {
        const data = (state.carts[itemIndexDec].qnty -= 1);

        return {
          ...state,
          carts: [...state.carts],
        };
      } else if (state.carts[itemIndexDec].qnty === 1) {
        const datas = state.carts.filter((el) => el.id !== action.payload);
        return {
          ...state,
          carts: datas,
        };
      }

    default:
      return state;
  }
};
