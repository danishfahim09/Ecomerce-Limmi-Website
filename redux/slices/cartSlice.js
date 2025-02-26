// Export a slice
// Export reducer
// Export the reeducer
// Export the reducer and reducers

const { createSlice } = require("@reduxjs/toolkit");

//Get Initial State from localStorage If available 
const initialState = (typeof window !== "undefined" && JSON.parse(localStorage.getItem("cart"))) || []

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
                const newItem = { id, title, salePrice, qty: 1, imageUrl }
                state.push(newItem)
                //update localStorage with the new state
                if (typeof window !== "undefined") {
                    localStorage.setItem("cart", JSON.stringify([...state, newItem]))
                }

            }
        },
        removeFromCart: (state, action) => {
            const cartId = action.payload
            const newState = state.filter((item) => item.id !== cartId)
            if (typeof window !== "undefined") {
                localStorage.setItem("cart", JSON.stringify(newState))
            }
            return newState
        },
        incrementQty: (state, action) => {
            const cartId = action.payload;
            const cartItem = state.find((item) => item.id === cartId)
            if (cartItem) {
                cartItem.qty += 1
            }
            //update localStorage with new state
            if (typeof window !== "undefined") {
                localStorage.setItem("cart", JSON.stringify([...state]))
            }

        },
        decrementtQty: (state, action) => {
            const cartId = action.payload;
            const cartItem = state.find((item) => item.id === cartId)
            if (cartItem && cartItem.qty > 1) {
                cartItem.qty -= 1
                //update localStorage with new state

                if (typeof window !== "undefined") {
                    localStorage.setItem("cart", JSON.stringify([...state]))
                }
            }
        },
    }
})
export const { addToCart, removeFromCart, incrementQty, decrementtQty } = cartSlice.actions;
export default cartSlice.reducer