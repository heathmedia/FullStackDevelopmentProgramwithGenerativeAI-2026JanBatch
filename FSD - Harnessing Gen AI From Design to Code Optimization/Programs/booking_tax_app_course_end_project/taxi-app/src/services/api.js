import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000"
});

export const getCabs = () => API.get("/cabs");
export const bookRide = (data) => API.post("/rides", data);
export const getRides = () => API.get("/rides");
export const cancelRide = (id) => API.delete(`/rides/${id}`);