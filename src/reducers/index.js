import homeReducer from "./homeReducer"
import {combineReducers} from "redux"
import myReducer from "./myReducer"
import suggestReducer from "./suggestReducer"

export default combineReducers({
    home: homeReducer,
    my: myReducer,
    suggest: suggestReducer
})