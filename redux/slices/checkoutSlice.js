const { createSlice } = require("@reduxjs/toolkit")
const initialState = {
    currentStep: 1,
    checkoutFormData: {}
};
const checkOutSlice = createSlice({
    name: "checkout",
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        updateCheckoutFormData: (state, action) => {
            state.checkoutFormData = { ...state.checkoutFormData, ...action.payload }
        },
    }
})
export const {setCurrentStep,updateCheckoutFormData} = checkOutSlice.actions
export default checkOutSlice.reducer