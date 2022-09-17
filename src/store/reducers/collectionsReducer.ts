import {
    CollectionsActions,
    CollectionsActionTypes,
    CollectionsState,
} from "types/collections";

const initState: CollectionsState = {
    collections: [],
    error: null,
    loading: false,
};

export const collectionsReducer = (
    state = initState,
    action: CollectionsActions,
): CollectionsState => {
    switch (action.type) {
        case CollectionsActionTypes.FETCH_COLLECTIONS:
            return {
                ...state,
                loading: true,
            };
        case CollectionsActionTypes.FETCH_COLLECTIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                collections: action.payload,
            };
        case CollectionsActionTypes.FETCH_COLLECTIONS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};