import React from "react";
import Footer from "../composant/Footer";
import Navigation from "../composant/Navigation";
import LogementContent from "../composant/LogementContent";

const Logement = () => {
  return (
    <div className="page-position">
      <Navigation />
      <LogementContent />
      <Footer />
    </div>
  );
};

export default Logement;
