const { createSlice } = require('@reduxjs/toolkit');

const pageInfoSlice = createSlice({
  name: 'pageInfo',
  initialState: {},
  reducers: {
    updatePageInfo(state, actions) {
      const data = actions.payload;
      if (!data) return;
      return { data };
    },
  },
});

const { actions, reducer } = pageInfoSlice;
export const { updatePageInfo } = actions;
export default reducer;
