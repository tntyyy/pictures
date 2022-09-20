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

export const getPicturesByCollection = () => {
    return async (dispatch: Dispatch<PicturesActions>) => {
        try {
            dispatch({type: PicturesActionTypes.FETCH_PICTURES});
            const response = await axios.get('http://localhost:8080/api/pictures-in-collection/1');
        } catch (e) {

        }
    }
}