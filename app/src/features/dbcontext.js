import {createSlice} from '@reduxjs/toolkit'
import Gun from 'gun'

const db = Gun();

export const dbContext = createSlice({
    name:'gundb',
    initialState:db,
    reducers:{
        insertInitialVal:(state,action)=>{
            state.get('user').put(action.payload).once((data)=>{
                console.log("user Data"+data);
            })
        },
        getUsers:(state,action)=>{
                // state.value = action.payload;
                state.get('user').once(action.payload)
        }
    }
})

export const {insertInitialVal,getUsers} = dbContext.actions;
export default dbContext.reducer;