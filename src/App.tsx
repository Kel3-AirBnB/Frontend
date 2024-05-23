import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import Profile from "@/pages/Profile";
import NoPage from "@/pages/NoPage";
import DetailPenginapan from "./pages/DetailPenginapan";
import Register from "./pages/Register";
import Login from "./pages/Login";
import History from "./pages/History";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/penginapan/:id_penginapan" element={<DetailPenginapan />} />
        <Route path="*" element={<NoPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
