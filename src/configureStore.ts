import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunkMiddleware from "redux-thunk";
import rootReducer from "./reducers";

function configureStore(persistedState: any) {
	const store = createStore(rootReducer, persistedState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
	return store;
}

export const store = configureStore({
	issues: {},
});
