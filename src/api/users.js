import axios from "axios";

const source = "https://reqres.in/api/users?page=1";

export default {
  getUsers() {
    return axios
      .get(source)
      .then(r => r.data.data)
      .then(items => {
        return items;
      });
  }
};
