import homeReducer from "./homeReducer"
import {combineReducers} from "redux"
import modalReducer from "./modalReducer"
import myReducer from "./myReducer"
import additionalReducer from "./additionalReducer"
import loginReducer from "./loginReducer"
import suggestReducer from "./suggestReducer"

export default combineReducers({
    home: homeReducer,
    modal: modalReducer,
    my: myReducer,
    additional: additionalReducer,
    login: loginReducer,
    suggest: suggestReducer
})