import React, { ReactNode } from "react";

import Navbar from "../components/Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <main className="flex-1">{children}</main>
      <footer>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas quidem
        cum repudiandae qui necessitatibus? Nam, voluptates perferendis amet sed
        quam aliquid tempora magnam aperiam voluptatum sint ducimus porro
        adipisci facere.
      </footer>
    </div>
  );
};

export default MainLayout;
