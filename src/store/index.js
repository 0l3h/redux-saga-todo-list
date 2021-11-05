import createSagaMiddleware from "@redux-saga/core";
import {composeWithDevTools} from "redux-devtools-extension";
import { createStore, applyMiddleware } from "redux";
import todoReducer from './../reducers/todoReducer';
import rootSaga from "./../sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(todoReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
