import { createSlice } from "@reduxjs/toolkit";

const items: ICart[] =
  localStorage.getItem("cartItems") != null
    ? JSON.parse(localStorage.getItem("cartItems")!) ?? []
    : [];
const totalAmount: number =
  localStorage.getItem("totalAmount") != null
    ? JSON.parse(localStorage.getItem("totalAmount")!) ?? 0
    : 0;
const totalItems: number =
  localStorage.getItem("totalItems") != null
    ? JSON.parse(localStorage.getItem("totalItems")!) ?? 0
    : 0;

export interface ICart {
  id: string;
  name: string;
  price: number;
  image: string; // Add or adjust this line based on your actual data structure
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
      console.log(action);
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

      localStorage.setItem(
        "cartItems",
        JSON.stringify(state.cartItems.map((item) => item))
      );

      localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));

      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));
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
    },
  },
});

export const { addToCart, incrementQ, decrementQ, removeFromCart } =
  cartSlice.actions;

export default cartSlice.reducer;
