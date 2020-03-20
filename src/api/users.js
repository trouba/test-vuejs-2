import axios from "axios";

const apiBaseUrl = "https://reqres.in/api/";

const sources = {
  users: "users?page=1",
  user: "users"
};

export default {
  getUsers() {
    return axios
      .get(apiBaseUrl + sources.users)
      .then(r => r.data.data)
      .then(users => {
        return users;
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  getUser(id) {
    return axios
      .get(apiBaseUrl + sources.user + "/" + id)
      .then(r => r.data.data)
      .then(user => {
        return user;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
