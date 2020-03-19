import axios from "axios";

const apiBaseUrl = "https://reqres.in/api/";

const sources = {
  users: "users?page=1",
  user: "user"
};

export default {
  getUsers() {
    return axios
      .get(apiBaseUrl + sources.users)
      .then(r => r.data.data)
      .then(items => {
        return items;
      });
  },
  getUser(id) {
    return axios
      .get(apiBaseUrl + sources.user + "/" + id)
      .then(r => r.data.data)
      .then(user => {
        return user;
      });
  }
};
