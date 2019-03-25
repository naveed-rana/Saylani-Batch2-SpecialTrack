import axios from "axios";

export function getGetHubUser(name) {
  return dispatch => {
    let url = `http://localhost:8080/test`;

    axios
      .post(url)
      .then(res => {
        alert('res recived')
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
}
