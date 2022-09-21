import {Dispatch} from "redux";
import axios from "axios";
import {PicturesActions, PicturesActionTypes} from "types/pictures";
import {BASE_URL, pictureEndpoints} from "constants/api";

export const getPictures = () => {
    return async (dispatch: Dispatch<PicturesActions>) => {
        try {
            dispatch({type: PicturesActionTypes.FETCH_PICTURES});
            const response = await axios.get(`${BASE_URL}${pictureEndpoints.PICTURES}`);
            dispatch({
                type: PicturesActionTypes.FETCH_PICTURES_SUCCESS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: PicturesActionTypes.FETCH_PICTURES_ERROR,
                payload: "Произошла ошибка при загрузке картинок"
            });
        }
    }
}

export const getPicturesByCollection = (id: string | undefined) => {
    return async (dispatch: Dispatch<PicturesActions>) => {
        try {
            dispatch({type: PicturesActionTypes.FETCH_PICTURES});
            const response = await axios.get(`${BASE_URL}${pictureEndpoints.PICTURES_IN_COLLECTION}/${id}`);
            dispatch({
                type: PicturesActionTypes.FETCH_PICTURES_SUCCESS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: PicturesActionTypes.FETCH_PICTURES_ERROR,
                payload: "Произошла ошибка при загрузке картинок"
            })
        }
    }
}

export const createPicture = (title: string | undefined, path: string | undefined, collection_id: string | undefined) => {
    return async (dispatch: Dispatch<PicturesActions>) => {
        try {
            dispatch({type: PicturesActionTypes.FETCH_PICTURES});
            const response = await axios.post(`${BASE_URL}${pictureEndpoints.PICTURES}`, {
                "title": title,
                "path": path,
                "collection_id": collection_id
            });
            dispatch({
                type: PicturesActionTypes.FETCH_PICTURES_SUCCESS,
                payload: response.data
            });
        } catch (e) {
            dispatch({
                type: PicturesActionTypes.FETCH_PICTURES_ERROR,
                payload: "Произошла ошибка при создании картинки"
            })
        }
    }
}