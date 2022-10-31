import axios from "axios";

export const appService = axios.create({
  baseURL: "https://my-json-server.typicode.com/ardadura/hangman-api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    rejectUnauthorized: false,
  },
});
