import React from "react";
import { selectedSongs } from "../redux/actions/songAction";
import { useSelector, useDispatch } from "react-redux";



const DisplaySongs = () => {

    const songsData = useSelector(state => state.songData)
    const dispatch = useDispatch();


    return (
        <div>
            <h1>Songs List</h1>
            {
                songsData.map((song, index) =>{
                    return (
                        <div key={index} onClick={()=>dispatch(selectedSongs(song))}>
                            <h3>{song.name}</h3>
                        </div>
                    )
                })
            }
        </div>

    )
}

export default DisplaySongs;