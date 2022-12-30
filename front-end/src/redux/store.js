import { configureStore } from '@reduxjs/toolkit';
import meDataSlice from './meData.slice';

const reducer = {
meData : meDataSlice
};

const store = configureStore({
  reducer
});

export default store;