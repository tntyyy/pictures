export interface ICollection {
    id: number,
    title: string,
    description: string
}

export interface CollectionsState {
    collections: ICollection[];
    loading: boolean;
    error: null | string;
}

export enum CollectionsActionTypes {
    FETCH_COLLECTIONS = "FETCH_COLLECTIONS",
    FETCH_COLLECTIONS_SUCCESS = "FETCH_COLLECTIONS_SUCCESS",
    FETCH_COLLECTIONS_ERROR = "FETCH_COLLECTIONS_ERROR",
}

interface FetchCollectionsAction {
    type: CollectionsActionTypes.FETCH_COLLECTIONS;
}

interface FetchCollectionsSuccessAction {
    type: CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS;
    payload: ICollection[];
}

interface FetchCollectionErrorAction {
    type: CollectionsActionTypes.FETCH_COLLECTIONS_ERROR;
    payload: string;
}

export type CollectionsActions =
    | FetchCollectionsAction
    | FetchCollectionsSuccessAction
    | FetchCollectionErrorAction;