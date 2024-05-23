import axiosWithConfig from "../axiosWithConfig";
import { IUserType } from "./types";

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get("/profile");
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const editProfile = async (body: IUserType) => {
  try {
    const formData = new FormData();

    formData.append("name", body.name);
    formData.append("email", body.email);
    formData.append("tanggal_lahir", body.tanggal_lahir);

    if (body.password != undefined) {
      formData.append("password", body.password);
    }

    if (body.foto.length > 0) {
      formData.append("foto", body.foto);
    }

    const response = await axiosWithConfig.put("/users", formData);
    return response;
  } catch (error: any) {
    return error.response;
  }
};

export const deleteUser = async () => {
  try {
    const response = await axiosWithConfig.delete("/users");
    return response;
  } catch (error: any) {
    return error.response;
  }
};
