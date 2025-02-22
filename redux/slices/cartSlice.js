// Export a slice
// Export reducer
// Export the reeducer
// Export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

const initialState = []

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart: (state, action) => {
            const { id, title, salePrice, imageUrl } = action.payload
            //check if the item alredy exixt in the cart
            const existingItem = state.find((item) => item.id == id)
            if (existingItem) {
                //check if the item exists ,update the quantity 
                existingItem.qty += 1
            } else {
                //if the item doesn't exist, add it  to the cart
                state.push({ id, title, salePrice, qty: 1, imageUrl })
            }

        },
        removeFromCart: (state, action) => {
            const cartId = action.payload
            return state.filter((item) => item.id !== cartId)
        },
        incrementQty: (state, action) => {
            const cartId = action.payload;
            const cartItem = state.find((item) => item.id === cartId)
            if (cartItem) {
                cartItem.qty += 1
            }
        },
        decrementtQty: (state, action) => {
            const cartId = action.payload;
            const cartItem = state.find((item) => item.id === cartId)
            if (cartItem && cartItem.qty > 1) {
                cartItem.qty -= 1
            }
        },
    }
})
export const { addToCart, removeFromCart, incrementQty, decrementtQty } = cartSlice.actions;
export default cartSlice.reducer