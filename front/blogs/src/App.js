import React from 'react';
import logo from './logo.svg';
import './App.css';
import ConfigureStore from "./store/ConfigureStore";
import {Provider} from 'react-redux'
import Bugs from "./bugs";
import PostList from "./component/postList";

const store = ConfigureStore()

function App() {
    return (
        <Provider store={store}>
            {/*<Bugs/>*/}
            <PostList/>
        </Provider>
    );
}

export default App;
