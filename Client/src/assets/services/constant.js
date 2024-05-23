import { BASE_URL } from "./index.js";
import axios from "axios";

export async function getAllData(endpoint) {
  try {
    const response = await axios(`${BASE_URL}/product`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
export async function getDataById(id) {
  try {
    const response = await axios(`${BASE_URL}/product/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
}
