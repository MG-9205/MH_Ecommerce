import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";


type User={
  Name:string;
  Email:string;
  id:string
}

export interface userState {
  value: User;
}

const initialState: userState = {
  value: {
    Name: "",
    Email: "",
    id:""
  }
};

const UserSlice = createSlice({
  name: "UserSlice",
  initialState,
  reducers: {
    setUserState: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
    }
  }
});

export const { setUserState } = UserSlice.actions;

export const selectUser = (state: RootState) => state.user.value;

export default UserSlice.reducer;
