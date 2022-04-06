import cartReducer from '../features/Cart/CartSlice';
import productsReducer from '../features/Products/ProductSlice';
import pageInfoReducer from '../features/PageInfo/PageInfoSlice';
const { configureStore } = require('@reduxjs/toolkit');

const rootReducer = {
  cart: cartReducer,
  products: productsReducer,
  pageInfo: pageInfoReducer,
};

const store = configureStore({
  reducer: rootReducer,
});

export default store;
