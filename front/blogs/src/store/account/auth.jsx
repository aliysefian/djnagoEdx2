import {createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "../api";

const slice = createSlice({
    name: 'auth',
    initialState: {
        token:{},
        loading:false,
    },
    reducers: {
        login: ((state, action) => {
            state.push({
                description: action.payload,
            });
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
export const postLogin=()=>apiCallBegan({
        url: '/posts',
        onSuccess: login.type
        // onError: apiCallFail.type
    }
)

