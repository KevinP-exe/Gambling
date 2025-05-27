import React, { useState } from "react";
import "./SlotMachine.css";

const SlotMachine = () => {
  const [slots, setSlots] = useState(["🍒", "🍋", "🍉"]); // Los valores de las "ruedas"
  const [spinResult, setSpinResult] = useState([]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [message, setMessage] = useState("");

  // Función que genera un valor aleatorio para cada rueda
  const spinSlot = () => {
    setIsSpinning(true);
    setMessage(""); // Resetea el mensaje

    setTimeout(() => {
      const newSlots = [
        randomSlot(),
        randomSlot(),
        randomSlot()
      ];
      
      setSpinResult(newSlots);
      checkWin(newSlots); // Verifica si ganó
      setIsSpinning(false);
    }, 1000); // Simula el tiempo de giro (1 segundo)
  };

  // Función para seleccionar un valor aleatorio de las frutas
  const randomSlot = () => {
    const fruits = ["🍒", "🍋", "🍉", "🍊", "🍇"];
    return fruits[Math.floor(Math.random() * fruits.length)];
  };

  // Verifica si todas las ruedas son iguales (ganó)
  const checkWin = (result) => {
    if (result[0] === result[1] && result[1] === result[2]) {
      setMessage("¡Felicidades, ganaste!");
    } else {
      setMessage("Lo siento, intenta de nuevo.");
    }
  };

  return (
    <div className="slot-machine">
      <h2>🎰 Máquina Tragamonedas 🎰</h2>
      <div className="slot-rows">
        {isSpinning ? (
          <div className="loading">GIRANDO...</div>
        ) : (
          <div className="slot-row">
            <div className="slot">{spinResult[0]}</div>
            <div className="slot">{spinResult[1]}</div>
            <div className="slot">{spinResult[2]}</div>
          </div>
        )}
      </div>

      <button
        className="spin-button"
        onClick={spinSlot}
        disabled={isSpinning}
      >
        {isSpinning ? "Girando..." : "Girar"}
      </button>

      <div className="result-message">{message}</div>
    </div>
  );
};

export default SlotMachine;
