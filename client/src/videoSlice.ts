import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { connect } from 'react-redux'

export interface initVideoState {
    call_duration: number,
    in_call: boolean,
    muted:boolean,
    hide: boolean,
    is_incoming: boolean,
    call_window: boolean,
    connected:boolean

}

let initialState:initVideoState ={
    call_duration: 0,
    in_call: false,
    // call_requested: false,
    muted: false,
    hide: false,
    is_incoming: false,
    call_window: false,
    connected:false
    

 }

export const videoSlice = createSlice({
    name: 'video',
    initialState,
     reducers:{
  
        open_call_window: (state, action: PayloadAction<boolean>) =>{
            state.call_window = action.payload
        },

        incoming: state =>{
            state.is_incoming = true
        },
        pickup: state =>{
            state.is_incoming = false;
            state.in_call = true
        },
        hangup: state =>{
            state.is_incoming = false;
            state.in_call = false
        },
        muteAudio: state =>{
            state.muted = !state.muted
        },
        hide: state =>{
            state.hide = !state.hide
        },
        setInCall: state =>{
            state.in_call = !state.in_call
        }


     }
})


export const {pickup, hangup, muteAudio, hide, setInCall, incoming, open_call_window} = videoSlice.actions;
export default videoSlice.reducer;