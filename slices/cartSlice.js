import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      state.items = [...state.items, action.payload];
    },

    removeFromCart: (state, action) => {
      const newCart = state.items.filter(
        item => item.id !== action.payload.id
      );
      state.items = newCart;
    },
    
    emptyCart: (state, action) => {
      state.items = [];
    },
  },
});

export const selectCartItem = state => {
  state.items;
};

export const selectCartItemById = (state, id) => {
  state.cart.items.filter(item => {
    item.id === id;
  });
};

export const cartLength=(state)=>{
    if(state.cart.items){
      return state.cart.items.length;
    }
}

export const {addToCart, removeFromCart, emptyCart} = cartSlice.actions;

export const selectCartTotal=state=>state.cart.items.reduce((total,item)=>total=total+item.price,0);

export default cartSlice.reducer;
