import React, { createContext, useContext, useEffect, useState } from "react";
import { IUserType } from "../apis/user/types";
import axiosWithConfig, { setAxiosConfig } from "../apis/axiosWithConfig";
import { getProfile } from "../apis/user/api";

interface Context {
  token: string;
  user: Partial<IUserType>;
  changeToken: (token?: string) => void;
}

const InitialState = {
  token: "",
  user: {},
  changeToken: () => {},
};

const AuthContext = createContext<Context>(InitialState);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem("token") ?? "");
  const [user, setUser] = useState<Partial<IUserType>>({});

  useEffect(() => {
    setAxiosConfig(token);
    token !== "" && fetchUser();
    axiosWithConfig.interceptors.response.use(
      (response) => response,
      (error) => {
        if (error.response.status === 401) {
          changeToken();
        }
      }
    );
  }, [token]);

  const fetchUser = async () => {
    try {
      const result = await getProfile();
      setUser(result);
    } catch (error: any) {
      console.log(error.response);
    }
  };

  const changeToken = (token?: string) => {
    const newToken = token ?? "";
    setToken(newToken);
    if (token) {
      localStorage.setItem("token", newToken);
    } else {
      localStorage.removeItem("token");
      setUser({});
    }
  };

  const AuthContextValue = {
    token,
    user,
    changeToken,
  };

  return <AuthContext.Provider value={AuthContextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  return context;
};