import songReducer from "./reducer/songReducer";
import songDataReducer from "./reducer/songData";
import { createStore, combineReducers } from "redux";


const rootReducer = combineReducers({
    SongSel: songReducer,
    songData: songDataReducer

})

const store = createStore(rootReducer);

export default store;
