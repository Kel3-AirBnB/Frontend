import React, { ReactNode } from "react";
import Navbar from "../components/fragments/Navbar";
import Footer from "../components/fragments/Footer";
import { Helmet } from "react-helmet";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Explore Beautiful Destinations in Indonesia</title>
        <meta
          name="description"
          content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, fugiat."
        />
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
