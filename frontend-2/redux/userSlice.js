import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
  const initialState = {
    status:'idle',
    user:[]
  }
const userSlice = createSlice({
    name:'user',
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(addUser.pending,(state,action)=>{
            state.status = 'loading';
        })
        builder.addCase(addUser.fulfilled,(state,action)=>{
            state.status = 'idle';
            state.user.push(action.payload);
        })
    }
})




 export const addUser = createAsyncThunk('addUser',  async (newUser)=>{
    const res  = await fetch('http://localhost:5000/register',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',   
          },
          body: JSON.stringify(newUser)
    })
    const data = await res.json();
    return data
})
export default userSlice.reducer;