import axios from "axios";

export default axios.create({
  baseURL: "https://api.themoviedb.org/3",
  headers: {
    Accept: "application/json",
  },
  params: {
    api_key: "15e383204c1b8a09dbfaaa4c01ed7e17",
  },
});
