import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

const PrimaryLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      <div className="py-10 pb-20">{children}</div>
      <Footer />
    </main>
  );
};

export default PrimaryLayout;
