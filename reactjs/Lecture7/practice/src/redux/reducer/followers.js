import { RESET } from "../action/action";

var initialState = {
  followers:[{
      name:'naveed-rana',
      login:'abc'
  }]
};

function followers(state = initialState, action) {
  switch (action.type) {
   
    default:
      return state;
  }
}

export default followers;
