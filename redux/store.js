import {configureStore} from '@reduxjs/toolkit'

import chanchitosReducer from './chanchitoSlice'

export const store = configureStore({
    reducer: chanchitosReducer
})