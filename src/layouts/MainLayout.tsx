import React from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import { Helmet } from "react-helmet";

interface MetaData {
  title: string;
  description: string;
}

interface MainLayoutProps {
  meta?: MetaData;
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, meta }) => {
  const defaultMeta: MetaData = {
    title: "Booking",
    description: "Booking app description",
  };

  //jika meta data tidak dikirim dari page maka yang dipakai adalah defaultMeta
  const currentMeta = meta || defaultMeta;

  return (
    <>
      <Helmet>
        <title>{currentMeta.title}</title>
        <meta name="description" content={currentMeta.description} />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Navbar />

        <main className="flex-1">{children}</main>

        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
