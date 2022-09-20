import {Dispatch} from "redux";
import {CollectionsActions, CollectionsActionTypes,} from "types/collections";
import axios from "axios";
import {BASE_URL, collectionsEndpoint} from "constants/api";

export const getCollections = () => {
    return async (dispatch: Dispatch<CollectionsActions>) => {
        try {
            dispatch({ type: CollectionsActionTypes.FETCH_COLLECTIONS });
            const response = await axios.get(`${BASE_URL}${collectionsEndpoint.COLLECTION}`);
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

export const createCollection = (title: string | undefined, description: string | undefined) => {
    return async (dispatch: Dispatch<CollectionsActions>) => {
        try {
            dispatch({type: CollectionsActionTypes.FETCH_COLLECTIONS});
            const response = await axios.post(`${BASE_URL}${collectionsEndpoint.COLLECTION}`, {
                "title": title,
                "description": description
            });
            dispatch({
                type: CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS,
                payload: response.data
            })
        } catch (e) {
            dispatch({
                type: CollectionsActionTypes.FETCH_COLLECTIONS_ERROR,
                payload: "Произошла при создании коллекции",
            });
        }
    }
}