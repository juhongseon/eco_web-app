import homeReducer from "./homeReducer"
import {combineReducers} from "redux"
import myReducer from "./myReducer"
import suggestReducer from "./suggestReducer"
import popularReducer from "./popularReducer"

export default combineReducers({
    home: homeReducer,
    popular: popularReducer,
    my: myReducer,
    suggest: suggestReducer
})