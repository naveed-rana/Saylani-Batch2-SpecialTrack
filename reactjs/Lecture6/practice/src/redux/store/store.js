import { createStore  } from 'redux';
import TodoReducer from './../reducer/reducer'

let store = createStore( 
            TodoReducer    )

    
export default store;