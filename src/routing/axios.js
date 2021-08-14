import axios from "axios";
import { API_URL } from "../config";

/** 'baseURL' to make requests to The Movie Database */
const instance = axios.create({
    baseURL: API_URL,
});

export default instance;