import axios from "axios";

const API = {
  search: function (q) {
    return axios.get("https://www.googleapis.com/books/v1/volumes", { params: { q: "title:" + q}});
  }
};

export default API;