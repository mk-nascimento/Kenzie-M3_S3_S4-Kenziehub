import axios from "axios";

export const api = axios.create( {
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
} );

api.defaults.baseURL = "https://kenziehub.herokuapp.com";
