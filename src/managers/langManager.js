import { createSlice } from '@reduxjs/toolkit'
const uz = require('../langs/uz.json');
const ru = require('../langs/ru.json');
const initialState = {
    lang: localStorage.getItem('lang') === 'uz' || !localStorage.getItem('lang') ? uz : ru,
}
export const langManager = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        editLang: (state, { payload }) => {
            localStorage.setItem('lang', payload.lang);
            state.lang = payload.lang === 'uz' ? uz : ru
        }
    },
})

export const { editLang } = langManager.actions

export default langManager.reducer