import {configureStore} from '@reduxjs/toolkit';
import slice from './inputSlice';
const store = configureStore({
    reducer : slice
});
export default store;