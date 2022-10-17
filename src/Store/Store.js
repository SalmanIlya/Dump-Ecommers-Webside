import { configureStore } from "@reduxjs/toolkit"
import  CartReducer  from "./AddCart"
import ProductReducer from "./ProductReducer"
import SingleProductsRoutes from "./SingleProductsRoutes"

const store = configureStore({
          reducer: {
                    productStore: ProductReducer,
                    oneProductStore: SingleProductsRoutes,
                    cartitem:CartReducer
                 

          }

})
export default store