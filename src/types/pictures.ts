export interface IPicture {
    id: number,
    title: string,
    path: string,
    collection_id: number
}

export interface PicturesState {
    pictures: IPicture[];
    loading: boolean;
    error: null | string;
}

export enum PicturesActionTypes {
    FETCH_PICTURES = "FETCH_PICTURES",
    FETCH_PICTURES_SUCCESS = "FETCH_PICTURES_SUCCESS",
    FETCH_PICTURES_ERROR = "FETCH_PICTURES_ERROR"
}

interface FetchPicturesAction {
    type: PicturesActionTypes.FETCH_PICTURES;
}

interface FetchPicturesSuccessAction {
    type: PicturesActionTypes.FETCH_PICTURES_SUCCESS;
    payload: IPicture[];
}

interface FetchPicturesErrorAction {
    type: PicturesActionTypes.FETCH_PICTURES_ERROR;
    payload: string;
}

export type PicturesActions =
    | FetchPicturesAction
    | FetchPicturesSuccessAction
    | FetchPicturesErrorAction