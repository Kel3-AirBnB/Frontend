import axiosWithConfig from "../axiosWithConfig";

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get("/profile");
    return response;
  } catch (error: any) {
    return error.response;
  }
};
