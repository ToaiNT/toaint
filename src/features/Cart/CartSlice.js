const { createSlice } = require('@reduxjs/toolkit');

const data = JSON.parse(localStorage.getItem('cart'));
const cartSlice = createSlice({
  name: 'cart',
  initialState: data ? data : [],
  reducers: {
    onAddToCart(state, actions) {
      const { product, quantity } = actions.payload;
      const index = findProductInCart(state, product);
      if (index !== -1) {
        state[index].quantity += quantity;
      } else {
        state.push(actions.payload);
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    onChangeQuantity(state, actions) {
      const { index, quantity } = actions.payload;
      if (state[index].quantity <= 1 && quantity === -1) {
        state.splice(index, 1);
      } else {
        state[index].quantity += quantity;
      }
      localStorage.setItem('cart', JSON.stringify(state));
    },
    onRemoveCart(state, actions) {
      const index = actions.payload;
      state.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(state));
    },
    handleTotalCoin(state) {
      const total = state.reduce(
        (total, item) =>
          total + Math.floor((item.product.price * (100 - item.product.sale)) / 100 / 10000) * item.quantity * 10000,
        0
      );
      localStorage.setItem('totalCoin', JSON.stringify(total));
    },
    handleSaleCoin(state, actions) {
      const { percentSale, totalCoin } = actions.payload;
      const newCoin = Math.floor((totalCoin * (100 - percentSale)) / 100 / 10000) * 10000;
      localStorage.setItem('newTotalCoin', newCoin);
    },
  },
});

const findProductInCart = (state, product) => {
  var index = -1;
  if (state) {
    for (var i = 0; i < state.length; i++) {
      if (state[i].product.id === product.id) {
        index = i;
        break;
      }
    }
  }
  return index;
};

const { actions, reducer } = cartSlice;
export const { onAddToCart, onChangeQuantity, onRemoveCart, handleTotalCoin, handleSaleCoin } = actions;
export default reducer;
