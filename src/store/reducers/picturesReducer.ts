import {PicturesActions,
        PicturesActionTypes,
        PicturesState
} from "types/pictures";

const initState: PicturesState = {
    pictures: [],
    error: null,
    loading: false
}

export const picturesReducer = (
    state = initState,
    action: PicturesActions
): PicturesState => {
    switch (action.type) {
        case PicturesActionTypes.FETCH_PICTURES:
            return {
                ...state,
                loading: true
            };
        case PicturesActionTypes.FETCH_PICTURES_SUCCESS:
            return {
                ...state,
                loading: false,
                pictures: action.payload
            }
        case PicturesActionTypes.FETCH_PICTURES_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
}