import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { USERS_API } from "../constans/api";
import { User } from "../types/User";

export interface UsersState {
  list: User[];
}

const initialState: UsersState = {
    list: [],
};

export const getUsers = createAsyncThunk("users/getUsers", async () => {
    const response = await fetch(USERS_API);
    const data = (await response.json()) as User[];
    return data;
});

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
    //Users
        builder.addCase(
            getUsers.fulfilled,
            (state, action: PayloadAction<User[]>) => {
                state.list = action.payload;
            }
        );
    },
});

export default usersSlice.reducer;
