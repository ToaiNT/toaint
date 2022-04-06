const { createSlice } = require('@reduxjs/toolkit');

const productSlice = createSlice({
  name: 'products',
  initialState: [],
  reducers: {
    updateProductData(state, actions) {
      const products = actions.payload;
      if (!products) return;
      return [...state, ...products];
    },
  },
});

const { actions, reducer } = productSlice;
export const { updateProductData } = actions;
export default reducer;
