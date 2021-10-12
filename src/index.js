import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const defaultState = {
    cash: 220,
    tours: [],
    showLiked: false,
};

function reducer(state = defaultState, action) {
    switch (action.type) {
        case "LOAD_TOURS":
            return { ...state, tours: action.payload };
        case "UPDATE_TOURS":
            return { ...state, tours: action.payload };
        case "SET_LIKE":
            return { ...state, tours: action.payload };
        case "TOGGLE_SHOW_LIKED":
            return { ...state, showLiked: action.payload };
        case "ADD_CASH":
            return { ...state, cash: state.cash + action.payload };
        case "GET_CASH":
            return { ...state, cash: state.cash - action.payload };
        default:
            return state;
    }
}

const store = createStore(reducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
