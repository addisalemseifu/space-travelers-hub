import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const dataUrl = 'https://api.spacexdata.com/v4/rockets';

export const getMissions = createAsyncThunk('mission/getMissions', () => axios.get(dataUrl)
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
    missions: [],
  isLoading: true,
};

const missionSlice = createSlice({
  name: 'mission',
  initialState,
  reducers: {
    reserveMission: (state, action) => {
      console.log(action.payload)
      let index = null
       for (let i = 0;i<state.missions.length;i++){
      if (state.missions[i].id === action.payload) {
        index = i;
    }
  }
console.log(index)

for (let i = 0;i<state.missions.length;i++){
if (i === index) {
  state.missions[i].reserved = true;
}
}
    },
    cancelMission: (state, action) => {
      console.log(action.payload)
      let index = null
       for (let i = 0;i<state.missions.length;i++){
      if (state.missions[i].id === action.payload) {
        index = i;
    }
  }
console.log(index)

for (let i = 0;i<state.missions.length;i++){
if (i === index) {
  state.missions[i].reserved = false;
}
}
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.isLoading = true;
    },
    [getMissions.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.missions = action.payload;
    },
    [getMissions.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});
export const { reserveMission, cancelMission } = missionSlice.actions;
export default missionSlice.reducer;
