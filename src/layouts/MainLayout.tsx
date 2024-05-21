import React, { ReactNode } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
