import { createSlice } from "@reduxjs/toolkit";
import {getLocalStorage} from '../utils/utilities';


const storageSlice = createSlice({
    name: "storeData",
    initialState: getLocalStorage('existingData'),
    reducers: {
        storeData(state,action){
            const payload = action.payload;
            state = payload;
            console.log(state);
        }
    }
});

export const storeActions = storageSlice.actions;

export default storageSlice.reducer;