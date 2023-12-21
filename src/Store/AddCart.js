import { createSlice, current } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const CartReducer = createSlice({
  name: "cartitem",
  initialState: {
    cart:[],
    //  localStorage.getItem("cart")
      // ? JSON.parse(localStorage.getItem("cart"))
      // : [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newitem = action.payload.id;

      const finddata = state.cart.findIndex((item) => item.id === newitem);

      if (finddata >= 0) {
        state.cart[finddata].CardQuantity += 1;
        toast.success("increace product quantity", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      } else {
        state.cart.push({ ...action.payload, CardQuantity: 1 });
        toast.success("Add product in a card", {
          position: toast.POSITION.BOTTOM_LEFT,
        });
      }
      // localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
      toast.error("Add product in a card", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      // localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    increase: (state, action) => {
      const currentState = current(state);
      const index = currentState.cart.findIndex((item) => {
        return item.id === action.payload;
      });
      if (state.cart[index].CardQuantity) {
        state.cart[index].CardQuantity++;
      }
      toast.success(" increace product in a card", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      // localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    decrease: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);
      if (state.cart[index].CardQuantity === 1) {
        const deleteitem = (state.cart = state.cart.filter(
          (x) => x.id !== action.payload
        ));
        state.cart = deleteitem;
      } else {
        if (state.cart[index].CardQuantity >= 1) {
          state.cart[index].CardQuantity -= 1;
        }
      }
      toast.error("remove product from card", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
      // localStorage.setItem("cart", JSON.stringify(state.cart));
    },
    clearCart: (state) => {
      state.cart = [];
      toast.error("card is clear", {
        position: toast.POSITION.BOTTOM_LEFT,
      });
    },

    getTotal(state, action) {
      let { total, quantity } = state.cart.reduce(
        (cardTotal, carditem) => {
          const { price, CardQuantity } = carditem;
          const totalItem = price * CardQuantity;
          cardTotal.total += totalItem;
          cardTotal.quantity += CardQuantity;
          return cardTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      state.cartTotalAmount = total;
      state.cartTotalQuantity = quantity;
    },
  },
});
export const {
  increase,
  decrease,
  addToCart,
  clearCart,
  removeItem,
  getTotal,
} = CartReducer.actions;
export default CartReducer.reducer;
