import { SELECTED_SONGS } from "./actionTypes";

export const selectedSongs = (song) => {
    return {
        type: SELECTED_SONGS,
        payload: song

    }
}