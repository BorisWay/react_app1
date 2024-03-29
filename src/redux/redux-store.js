// import {combineReducers, configureStore} from "@reduxjs/toolkit"
import { combineReducers, legacy_createStore as createStore } from "redux";
import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

let reducers = combineReducers({
    dialogsPage: dialogsReducer,
    profilePage: profileReducer,
    sidebar:sidebarReducer
}
);

let store = createStore(reducers);

export default store;