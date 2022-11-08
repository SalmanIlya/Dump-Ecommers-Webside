import { createSlice, current } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

export const CartReducer = createSlice({
  name: "cartitem",
  initialState: {
    cart: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  },
  reducers: {
    addToCart: (state, action) => {
      const newitem = action.payload.id;
      const finddata = state.cart.findIndex((item) => item.id === newitem);

      if (finddata >= 0) {
        state.cart[finddata].CardQuantity += 1;
        // toast.success("increase product CardQuantity in a cart", {
        //   position: toast.POSITION.BOTTOM_LEFT,
        // });
      } else {
        state.cart.push({ ...action.payload, CardQuantity: 1 });
        // toast.success("product is add in a cart", {
        //   position: toast.POSITION.BOTTOM_LEFT,
        // });
      }
    },

    removeItem: (state, action) => {
      state.cart = state.cart.filter((x) => x.id !== action.payload);
      // toast.error("remove product from card", {
      //   position: toast.POSITION.BOTTOM_LEFT,
      // });
    },
    increase: (state, action) => {
      const currentState = current(state);
      console.log(action.payload);
      console.log(currentState);
      const index = currentState.cart.findIndex((item) => {
        console.log("item", item);
        console.log("action.payload.id", action.payload);
        return item.id === action.payload;
      });
      

      
      if (state.cart[index].CardQuantity) {
        state.cart[index].CardQuantity++;
        console.log("if is working");
      }
      // toast.success("increase product", {
      //   position: toast.POSITION.BOTTOM_LEFT,
      // });
    },
    decrease: (state, action) => {
      const index = state.cart.findIndex((item) => item.id === action.payload);

      if (state.cart[index].CardQuantity === 1) {
        const deleteitem = (state.cart = state.cart.filter(
          (x) => x.id !== action.payload
        ));
        state.cart = deleteitem;
        // toast.error("remove product from  a cart ", {
        //   position: toast.POSITION.BOTTOM_LEFT,
        // });
      } else {
        if (state.cart[index].CardQuantity >= 1) {
          state.cart[index].CardQuantity -= 1;
          console.log("if is working");
          // toast.error("decrease product from card ", {
          //   position: toast.POSITION.BOTTOM_LEFT,
          // });
        }
      }
     
    },
    clearCart: (state, action) => {
      state.cart = [];
     
    },
    getTotal(state,action){
      state.cart.reduce((cardtotal,cart)=>{
const {price,quantity}=cart
const totalitem=price*quantity
cardtotal.total+=totalitem
      },{
        total:0,
        quantity:0
      })
    }
  },
});
export const { increase, decrease, addToCart, clearCart, removeItem } =
  CartReducer.actions;
export default CartReducer.reducer;
