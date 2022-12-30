import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { dataAll } from '../api/data';

export const getDataMe = createAsyncThunk("/listData", async () => {
    try {     
      const response = await dataAll();
       return response.data;
    } catch (err) {
      console.log("get api list data errors");
    }
  });

const meDataSlice = createSlice({
    name: "dataMe",
    initialState: {
        data : null,
        error : "",
        loading : false,
    },
    extraReducers : {
  
        [getDataMe.pending]: (state, action) => {
            state.loading = true;
          },
          [getDataMe.fulfilled]: (state, action) => {
            state.loading = false;
            state.data = action.payload;
          },
          [getDataMe.rejected]: (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          },
       
    }
});
export default meDataSlice.reducer;