import {combineReducers} from "redux";
import {collectionsReducer} from "./collectionsReducer";

export const rootReducer = combineReducers({
    collections: collectionsReducer,
})

export type RootState = ReturnType<typeof rootReducer>;