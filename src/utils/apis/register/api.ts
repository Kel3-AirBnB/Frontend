import axios from "axios";

export const registerUser = async (formData: FormData): Promise<any> => {
  try {
    const response = await axios.post("http://3.27.222.44/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    return error.response;
  }
};
