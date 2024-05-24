import axios from "axios";
import { LoginType } from "./types";

export const userLogin = async (body: LoginType) => {
  try {
    const response = await axios.post("http://3.27.222.44/login", body);
    return response.data;
  } catch (error: any) {
    return error.response.data;
  }
};
