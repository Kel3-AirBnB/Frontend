import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import DaftarPenginapan from "@/pages/DaftarPenginapan";
import DetailPenginapan from "@/pages/DetailPenginapan";
import NoPage from "@/pages/NoPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/daftar-penginapan" element={<DaftarPenginapan />} />
        <Route
          path="/penginapan/:id_penginapan"
          element={<DetailPenginapan />}
        />
        <Route path="*" element={<NoPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
