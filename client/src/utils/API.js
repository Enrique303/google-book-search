import axios from "axios";
const APIKEY = "AIzaSyDSFBT0tHZK1nwTRm12mg6cCQjODL09PmY";

const API = {
  search: function (query) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${APIKEY}`);
  },
};

export default API;