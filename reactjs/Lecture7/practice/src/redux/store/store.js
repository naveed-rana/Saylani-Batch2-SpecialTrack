import { createStore,applyMiddleware } from "redux";
import rootRuducer from "../reducer/rootReducer";
import thunk from 'redux-thunk';


let store = createStore(
    rootRuducer,
    applyMiddleware(thunk));

export default store;
