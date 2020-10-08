import React from 'react';
import './App.css';
import ConfigureStore from "./store/ConfigureStore";
import {Provider} from 'react-redux'

import Main from "./component/main/main";

const store = ConfigureStore()

function App() {
    return (
        <Provider store={store}>
            <Main/>
        </Provider>
    );
}

export default App;
