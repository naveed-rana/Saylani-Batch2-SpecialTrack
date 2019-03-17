import { RESET } from "../action/action";

var initialState = {
 githUser:{
     login:'khuram',
     url:'abc',
     followers:'121',
     followings:'11'
 }
};

function githUser(state = initialState, action) {
  switch (action.type) {
    
    case 'AddUser':{

      console.log('data at reducre',action.data);

      return {
        ...state,
        githUser:action.data
      }
      

    }
    default:
      return state;
  }
}

export default githUser;
