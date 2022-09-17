import { Dispatch } from "redux";
import {
    CollectionsActions,
    CollectionsActionTypes,
} from "types/collections";
import axios from "axios";

export const getCollections = () => {
    return async (dispatch: Dispatch<CollectionsActions>) => {
        try {
            dispatch({ type: CollectionsActionTypes.FETCH_COLLECTIONS });
            const response = await axios.get("http://localhost:8080/api/collections");
            dispatch({
                type: CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
                payload: response.data,
            });
        } catch (e) {
            dispatch({
                type: CollectionsActionTypes.FETCH_COLLECTIONS_ERROR,
                payload: "Произошла ошибка при загрузке коллекций",
            });
        }
    };
};