import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Provider, useDispatch } from "react-redux";
import { Router } from "react-router-dom";
import { store } from "configureStore";
import { createBrowserHistory } from "history";
import Drawers from "./components/drawers";
import { getInitIssuesAction } from "actions/issues";
import { getMuiTheme, MuiThemeProvider } from "material-ui/styles";

const hist = createBrowserHistory();

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getInitIssuesAction());
    });
    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Drawers></Drawers>
        </MuiThemeProvider>
    );
}

const Root = () => {
    return (
        <Provider store={store}>
            <Router history={hist}>
                <App></App>
            </Router>
        </Provider>
    );
};

export default Root;
