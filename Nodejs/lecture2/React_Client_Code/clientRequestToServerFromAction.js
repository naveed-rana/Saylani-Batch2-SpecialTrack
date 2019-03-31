import axios from "axios";

export function getGetHubUser(name) {


  return dispatch => {

    let url = `http://localhost:3030/test`;

    var data = {
      rate:140,
      total:300,
      country:'pakistan'
    }

    axios
      .post(url,data)
      .then(res => {
        alert('res recived')
        console.log(res.data);
      })
      .catch(err => {
        console.error(err);
      });
  };
}
