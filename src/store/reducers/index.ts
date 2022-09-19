import {combineReducers} from "redux";
import {collectionsReducer} from "./collectionsReducer";
import {picturesReducer} from "./picturesReducer";

export const rootReducer = combineReducers({
    collections: collectionsReducer,
    pictures: picturesReducer
})

export type RootState = ReturnType<typeof rootReducer>;