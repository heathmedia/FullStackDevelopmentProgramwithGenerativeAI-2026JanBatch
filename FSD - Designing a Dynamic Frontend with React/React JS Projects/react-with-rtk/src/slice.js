import { createSlice } from "@reduxjs/toolkit"
const MySlice = createSlice({
    name:"counter",
    initialState:{
        n:100,
        name:"Akash"
    },
    reducers:{  // which contains action functions which take state and action objects. 
        increment:(state)=> {
            state.n= state.n+1;
        },
        decrement:(state)=> {
            state.n= state.n-1;
        },
        dynamicIncrement:(state,action)=> {
            //console.log(state)
            //console.log(action)
            //console.log(action.payload.num)  // it extract dynamic num value
            let nValue = parseInt(action.payload.num);
            state.n= state.n+nValue;
        }
    }
})
export const {increment,decrement,dynamicIncrement}=MySlice.actions;
// component can call increment or decrement with help of dispatch() 
export default MySlice.reducer; // link to store 
