import { createSlice} from '@reduxjs/toolkit'
import {createSelector} from 'reselect'
import {apiCallBegan} from "./api";
let lastId = 0
const slice = createSlice({
    name: 'post',
    initialState: {
        list:[],
        loading:false,

    },
    reducers: {
        postReceived: ((state, action) => {
           state.list=action.payload
        })


    }
});
export const {postReceived} = slice.actions;
export default slice.reducer;

//memorized

// createSelector(
//     state => state.entities.posts,
//     posts => posts.filter(post => !bug.resolved)
// )
//actioncreatoy
export const loadPosts=()=>apiCallBegan({
        url: '/post/',
        onSuccess: postReceived.type
        // onError: apiCallFail.type
    }
)


// export default function reducer () {
//     return createReducer([], {
//         [bugAdded.type]: ((state, action) => {
//             state.push({
//                 id: ++lastId,
//                 description: action.payload.description,
//                 resolved: true
//             });
//         })
//         ,
//         [bugRemove.type]: ((state, action) => {
//             state = state.filter(m => m.id === action.payload.id)
//         })
//     })
// }

// export function reducer(state = [], action) {
//     switch (action.type) {
//         case bugAdded.type:
//             return [
//                 ...state, {
//                     id: ++lastId,
//                     description: action.payload.description,
//                     resolved: true
//                 }
//             ];
//         case bugRemove.type:
//             return state.filter(m => m.id === action.payload.id)
//         default:
//             return state
//     }
// }