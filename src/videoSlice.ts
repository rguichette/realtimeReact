import { createSlice } from '@reduxjs/toolkit'




export const videoSlice = createSlice({
    name: 'video',
    initialState:{
        call_duration: 0,
        in_call: false,
        // call_requested: false,
        muted: false,
        hide: false
        

     },
     reducers:{
        pickup: state =>{
            state.in_call = true
        },
        hangup: state =>{
            state.in_call = false
        },
        muteAudio: state =>{
            state.muted = !state.muted
        },
        hide: state =>{
            state.hide = !state.hide
        }

     }
})


export const {pickup, hangup, muteAudio, hide} = videoSlice.actions;
export default videoSlice.reducer;