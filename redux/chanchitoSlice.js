import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    chanchitos: []
}

 export const chanchitosSlice = createSlice({
    name: 'chanchitos',
    initialState,
    reducers: {
        setChanchitosReducer: (state, action) => {
            state.chanchitos = action.payload
            console.log(state.chanchitos)
        },
        addChanchitoReducer: (state, action) => {
            state.chanchitos.push(action.payload)
        }
    }
})

export const {
    setChanchitosReducer,
    addChanchitoReducer
} = chanchitosSlice.actions

export default chanchitosSlice.reducer;