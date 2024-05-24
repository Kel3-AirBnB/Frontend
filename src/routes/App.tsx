import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import DaftarPenginapan from "@/pages/DaftarPenginapan";
import DaftarReservasi from "@/pages/DaftarReservasi";
import NoPage from "@/pages/NoPage";
import Register from "../pages/Register";
import Login from "../pages/Login";
import History from "../pages/History";
import Review from "../pages/Review";
import DetailPenginapan from "../pages/DetailPenginapan";
import Payment from "../pages/Payment";
import ProtectedRoute from "./ProtectedRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/penginapan/:id_penginapan" element={<DetailPenginapan />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/daftar-penginapan" element={<DaftarPenginapan />} />
          <Route path="/daftar-reservasi" element={<DaftarReservasi />} />
          <Route path="*" element={<NoPage />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/review" element={<Review />} />
          <Route path="/payment" element={<Payment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
