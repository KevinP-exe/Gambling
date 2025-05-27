import React from "react";
import CardGame from "./CardGame";

const ListGames = ({ deleteGame, updateGame, loading, games }) => {
  return (
    <>
      <h1 className="text-2xl font-bold underline text-center">Listado de juegos</h1>
      <div className="flex flex-wrap gap-4 justify-center mt-5">
        {loading && <div className="text-center text-gray-500">Loading...</div>}

        {games?.map((game) => (
          <CardGame
            key={game._id}
            game={game}
            deleteGame={deleteGame}
            updateGame={updateGame}
          />
        ))}
      </div>
    </>
  );
};

export default ListGames;
