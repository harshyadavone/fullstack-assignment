import React from "react";
import Header from "./components/Header";
import HelpSection from "./components/HelpSection";
import Footer from "./components/Footer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <HelpSection />
      <Footer />
    </div>
  );
};

export default App;
