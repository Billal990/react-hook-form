import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  email: "",
  referalCode: "",
  otp: "",
  phone: "",
  firstName: "",
  lastName: "",
  gender: "",
  file: null,
  country: "",
  city: "",
  pinCode: "",
};

export const createUserSlice = createSlice({
  name: "createUserSlice",
  initialState,
  reducers: {
    addUserInfo(state, action) {
      return (state = { ...state, ...action.payload });
    },
    resetForm: (state, payload) => {
      return state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addUserInfo, resetForm } =
  createUserSlice.actions;

export default createUserSlice.reducer;
