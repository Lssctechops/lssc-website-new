import Footer from "../organisms/Footer";
import Navigation from "../organisms/Navigation";
import TopBar from "../organisms/TopBar";

const MainLayout = ({ children }) => {
  return (
    <main className="w-full">
      <header>
        <TopBar />
        <Navigation />
      </header>

      {children}

      <Footer />
    </main>
  );
};

export default MainLayout;
