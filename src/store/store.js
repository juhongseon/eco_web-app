import {createStore,applyMiddleware,compose} from "redux"
import thunk from "redux-thunk"
import rootReducer from '../reducers'
import {createLogger} from "redux-logger/src"

const logger = createLogger()
const middleWare = [thunk,logger]
const initialState = {}

const store = createStore(
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...middleWare)
    )
)
export default store