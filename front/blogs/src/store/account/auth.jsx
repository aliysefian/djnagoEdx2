import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "../api";

const slice = createSlice({
    name: 'auth',
    initialState: {
        token: {},
        loading: false,
    },
    reducers: {
        login: ((state, action) => {
            state.token = action.payload
        })


    }
});
export const {login} = slice.actions;
export default slice.reducer;

createSelector(
    state => state.entities.bugs,
    bugs => bugs.filter(bug => !bug.resolved)
)
//actioncreatoy
export const postLogin = () => apiCallBegan({
        url: '/api-token-auth/',
        onSuccess: login.type,
        data: {username: '1', password: '1'},
        method: 'post'
    }
)

