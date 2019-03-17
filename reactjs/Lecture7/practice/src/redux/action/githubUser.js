import axios from "axios";

export function getGetHubUser(name) {
  return dispatch => {

    let url = `https://api.github.com/users/${name}`;
    axios
      .get(url)
      .then(res => {
        console.log(res.data)
        dispatch({
          type:'AddUser',
          data:res.data
        })
      })
      .catch(err => {
        console.error(err);
      });

  };
}
