import {createSlice} from "@reduxjs/toolkit"
export const CartReducer=createSlice({
  name:"cartitem",
  initialState:{
    cart:[],
    cartTotalQuantity:0,
    cartTotalAmount:0
  },
  reducers:{
   addToCart:(state,action)=>{
    const newitem=action.payload.id
const finddata=state.cart.findIndex(item=>item.id===newitem)
if(finddata>=0){
  state.cart[finddata].quantity+=1
}else{
  state.cart.push({...action.payload,quantity:1})
}
  },
  removeItem:(state,action)=>{
    state.cart=state.cart.filter(x=>x.id!==action.payload)
  },
  increase:(state,action)=>{
const find=state.cart.findIndex((item)=>item.id===action.payload.id)

if(find>=0){
  state.cart[find].quantity+=1
}

  },
  decrease:(state,action)=>{
   console.log("dispatch");
  }
  }
})
export const {increase,decrease,addToCart,clearCart,removeItem}=CartReducer.actions
export default CartReducer.reducer