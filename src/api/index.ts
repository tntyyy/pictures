import axios from "axios";
import {BASE_URL, pictureEndpoints} from "../constants/api";

export const postPicture = async (title: string | undefined, path: string | undefined, collection_id: string | undefined) => {
    try {
        await axios.post(`${BASE_URL}${pictureEndpoints.PICTURES}`, {
            "title": title,
            "path": path,
            "collection_id": collection_id
        });
    } catch (e) {
        console.log(e);
    }
}