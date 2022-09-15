import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    chanchitos: [],
    dinero: {}
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
        },
        allChanchitos: (state) => {
            state.chanchitos
        },
        setDineroReducer: (state, action) => {
            state.dinero = action.payload
        }
    }
})

export const {
    setChanchitosReducer,
    addChanchitoReducer,
    allChanchitos,
    setDineroReducer
} = chanchitosSlice.actions

export default chanchitosSlice.reducer;