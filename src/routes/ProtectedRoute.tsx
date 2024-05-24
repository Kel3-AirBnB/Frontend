import { useAuth } from "@/utils/contexts/auth";
import { ReactNode } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }: { children?: ReactNode }) => {
  const { token } = useAuth();
  const { pathname } = useLocation();

  const authProtected = ["/login", "/register"];
  const protectedByToken = ["/profile", "/daftar-penginapan", "/daftar-reservasi", "/history", "/review", "/payment"];
  if (authProtected.includes(pathname)) {
    if (token) {
      return <Navigate to={"/"} />;
    }
  }
  if (protectedByToken.includes(pathname)) {
    if (!token) {
      return <Navigate to="/login" />;
    }
  }

  return children ? children : <Outlet />;
};

export default ProtectedRoute;
