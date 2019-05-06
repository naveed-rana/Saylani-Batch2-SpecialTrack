import { toast } from 'react-toastify';
import axios from 'axios';
import EndPoint from '../../EndPoint';

export const REMOVE_TODO = 'REMOVE_TODO';

//Remove data from Mongoose
export function removeToDo(id) {
    
    console.log(id);
    
    return (dispatch) => {
        axios.delete(EndPoint + `/todo/api/v1.0/tasks/${id}`)
            .then(() => {
                toast.success("Successfully deleted!");

                dispatch({
                    //Call Reducer
                    type: REMOVE_TODO,
                    payload: id
                });
            }).catch(()=>{
                toast.error("Error Occored! Please Try Again Later");


            })
    };
}