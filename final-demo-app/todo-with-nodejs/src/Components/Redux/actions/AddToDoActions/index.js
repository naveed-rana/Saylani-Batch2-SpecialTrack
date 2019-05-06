import { toast } from 'react-toastify';
import axios from 'axios';
import EndPoint from '../../EndPoint';

export const ADD_TODO = 'ADD_TODO';

//add new todo into mongoose
export function addToDo(data) {
    return (dispatch) => {
        axios.post(EndPoint + "/todo/api/v1.0/tasks", data)
        .then(() => {
                
            toast.success("Successfully Added!");
                dispatch({
                    type: ADD_TODO,
                    payload: data
                });
            }).catch(() =>{
                toast.error("Error Occored! Please Try Again Later");
            })
    }
}