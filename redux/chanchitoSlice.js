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
            state.dinero = {}
            state.dinero = action.payload
        },
        getDineroReducer: (state) => {
            state.dinero
        }
    }
})

export const {
    setChanchitosReducer,
    addChanchitoReducer,
    allChanchitos,
    setDineroReducer,
    getDineroReducer
} = chanchitosSlice.actions

export default chanchitosSlice.reducer;