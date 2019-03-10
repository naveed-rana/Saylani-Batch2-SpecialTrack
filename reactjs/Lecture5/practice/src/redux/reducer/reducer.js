import { RESET } from "../action/action";

var initialState = {
    counter : 0,
    name: "Khuram"
}
function todoReducer(state = initialState , action) {
    
    switch (action.type) {

        case 'ADDCOUNTER':
            console.log('data from reducer', action.data);
            
            {
                let currentCouter = state.counter;

                return { 
                    ...state,
                    counter : currentCouter + 1
                }
            }
        case 'DECREASECOUNTER':
            {
                let currentCouter = state.counter;
                return { 
                    ...state,
                    counter : currentCouter - 1
                }
            }
        case RESET:

            {
                return { 
                    ...state,
                    counter :  0
                }
            }
        default:
            return state;
    }
}

export default todoReducer;