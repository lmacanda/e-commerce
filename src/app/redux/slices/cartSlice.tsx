import { createSlice } from "@reduxjs/toolkit";

const items =
  localStorage.getItem("cartItems") !== null
    ? JSON.parse(localStorage.getItem("cartItems") || "")
    : [];

const totalAmount =
  localStorage.getItem("totalAmount") !== null
    ? JSON.parse(localStorage.getItem("totalAmount") || "")
    : 0;

const totalItems =
  localStorage.getItem("totalItems") !== null
    ? JSON.parse(localStorage.getItem("totalItems") || "")
    : 0;

const setItemFunc = (
  item: ICart[],
  totalAmount: number,
  totalItems: number
) => {
  localStorage.setItem("cartItems", JSON.stringify(item));
  localStorage.setItem("totalAmount", JSON.stringify(totalAmount));
  localStorage.setItem("totalItems", JSON.stringify(totalItems));
};

export interface ICart {
  id: string;
  name: string;
  price: number;
  image: string;
  color?: string | null;
  size?: string | null;
  quantity: number;
}

interface CartState {
  cartItems: ICart[];
  totalAmount: number;
  totalItems: number;
}

const initialState: CartState = {
  cartItems: items,
  totalAmount: totalAmount,
  totalItems: totalItems,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      } else {
        state.cartItems = [item, ...state.cartItems];
      }
      // Update totalAmount and totalItems
      state.totalAmount = state.cartItems.reduce(
        (accumulator, item) => accumulator + item.quantity * item.price,
        0
      );

      state.totalItems = state.cartItems.reduce(
        (accumulator, item) => accumulator + item.quantity,
        0
      );

      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalItems
      );
    },
    incrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity += 1;
      }
    },
    decrementQ(state, action) {
      const item = action.payload;
      let productItem = state.cartItems.find(
        (product) => product.id === item.id
      );
      if (productItem) {
        productItem.quantity -= 1;
        if (productItem.quantity === 0) {
          state.cartItems = state.cartItems.filter(
            (product) => product.id !== item.id
          );
        }
      }
    },
    removeFromCart(state, action) {
      const item = action.payload;
      state.cartItems = state.cartItems.filter(
        (product) => product.id !== item.id
      );
      setItemFunc(
        state.cartItems.map((item) => item),
        state.totalAmount,
        state.totalItems
      );
    },
  },
});

export const { addToCart, incrementQ, decrementQ, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
