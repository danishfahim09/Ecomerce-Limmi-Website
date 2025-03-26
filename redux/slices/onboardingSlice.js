const { createSlice } = require("@reduxjs/toolkit")
const initialState = {
    currentStep: 1,
    onboardingFormData: {}
};
const onboardingSlice = createSlice({
    name: "onboardingSlice",
    initialState,
    reducers: {
        setCurrentStep: (state, action) => {
            state.currentStep = action.payload;
        },
        updatOnboardingFormData: (state, action) => {
            state.onboardingFormData = { ...state.checkoutFormData, ...action.payload }
        },
    }
})
export const { setCurrentStep, updatOnboardingFormData } = onboardingSlice.actions
export default onboardingSlice.reducer