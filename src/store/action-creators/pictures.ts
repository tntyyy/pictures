import {Dispatch} from "redux";
import axios from "axios";
import {PicturesActions, PicturesActionTypes} from "types/pictures";

export const getPictures = () => {
    return async (dispatch: Dispatch<PicturesActions>) => {
        try {
            dispatch({type: PicturesActionTypes.FETCH_PICTURES});
            const response = await axios.get('http://localhost:8080/api/pictures');
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
