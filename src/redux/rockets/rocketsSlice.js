import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { act } from 'react-dom/test-utils';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';

export const getRockets = createAsyncThunk('rocket/getRockets', () => axios.get(dataUrl)
  .then((res) => res.data)
  .catch((err) => console.log(err)));

// export const postData = createAsyncThunk('book/postData', async (bookDetail) => axios.post(' https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books ', {
//   item_id: bookDetail.id,
//   title: bookDetail.title,
//   author: 'suzan collins',
//   category: bookDetail.category,
//   headers: {
//     'Content-type': 'application/json',
//   },
// }).then((response) => response.data).catch((err) => console.log(err)));

// export const deleteData = createAsyncThunk('book/deleteData', async (itemid) => axios.delete(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/McvW73kTCQbVPzcD7S2A/books/${itemid}`, {
//   body: JSON.stringify({
//     item_id: itemid,
//     app_id: 'McvW73kTCQbVPzcD7S2A',
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// }).then((response) => response).catch((err) => console.log(err)));

const initialState = {
  rockets: [],
  isLoading: true,
};

const rocketSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    reserve: (state, action) => {
        console.log(action.payload)
        let index = null
         for (let i = 0;i<state.rockets.length;i++){
        if (state.rockets[i].id === action.payload) {
          index = i;
      }
    }
console.log(index)

for (let i = 0;i<state.rockets.length;i++){
  if (i === index) {
    state.rockets[i].reserved = true;
}
}
    },
    cancelReserve: (state, action) => {
      console.log(action.payload)
      let index = null
       for (let i = 0;i<state.rockets.length;i++){
      if (state.rockets[i].id === action.payload) {
        index = i;
    }
  }
console.log(index)

for (let i = 0;i<state.rockets.length;i++){
if (i === index) {
  state.rockets[i].reserved = false;
}
}
    },
  },
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.isLoading = true;
    },
    [getRockets.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.rockets = action.payload;
    },
    [getRockets.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserve, cancelReserve } = rocketSlice.actions;
export default rocketSlice.reducer;
