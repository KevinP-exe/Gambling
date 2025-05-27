import React from "react";
import Button from "../Button";

const CardGame = ({ game, deleteGame, updateGame }) => {
  if (!game) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{game.name}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Categorías: </span> {game.categories}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Apuesta mínima:</span> {game.minimumbet}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">Apuesta máxima:</span> {game.maximumbet}
        </p>
        <p>id: {game._id}</p>

        <Button
          label={"Eliminar"}
          actionButton={() => deleteGame(game._id)}
          colorClass={"danger"}
        />

        <Button
          label={"Editar Información"}
          actionButton={() => updateGame(game)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

export default CardGame;
