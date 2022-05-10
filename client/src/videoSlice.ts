import { createSlice } from '@reduxjs/toolkit'

export interface initVideoState {
    call_duration: number,
    in_call: boolean,
    muted:boolean,
    hide: boolean,
    incoming: boolean

}

let initialState:initVideoState ={
    call_duration: 0,
    in_call: false,
    // call_requested: false,
    muted: false,
    hide: false,
    incoming: false
    

 }

export const videoSlice = createSlice({
    name: 'video',
    initialState,
     reducers:{
        
        incoming: state =>{
            state.incoming = true
        },
        pickup: state =>{
            state.incoming = false;
            state.in_call = true
        },
        hangup: state =>{
            state.incoming = false;
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


export const {pickup, hangup, muteAudio, hide, setInCall, incoming} = videoSlice.actions;
export default videoSlice.reducer;