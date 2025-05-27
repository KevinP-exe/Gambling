import React from "react";
import SlotMachine from "./SlotMachine";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-header">
        <h1>Bienvenido al Casino 🎰</h1>
        <p>¡Juega y diviértete con nuestra máquina tragamonedas!</p>
      </div>

      <div className="slot-container">
        <SlotMachine />
      </div>

      <div className="footer">
        <p>© 2025 Casino Virtual | Todos los derechos reservados.</p>
      </div>
    </div>
  );
};

export default HomePage;

