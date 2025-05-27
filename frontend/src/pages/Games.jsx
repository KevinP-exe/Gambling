import React, { useState, useEffect } from "react";
import RegisterGame from "../components/games/CardGame";
import ListGames from "../components/games/ListGames";
import useDataGames from "../components/games/hooks/useDataGames";

const Games = () => {
  // Cambiar el título de la página cuando se cargue
  useEffect(() => {
    document.title = 'Juegos';
  }, []);

  // Desestructurando hooks personalizados
  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    name,
    setName,
    categories,
    setCategories,
    minimumbet,
    setMinimumbet,
    maximumbet,
    setMaximumbet,
    errorGame,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    games,
    setGames,
    cleanData,
    handleSubmit,
    fetchData,
    deleteGame,
    updateGame,
    handleUpdate
  } = useDataGames();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Juegos</h1>

        {/* Fila de botones para alternar entre vista de lista y formulario */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
            onClick={() => setActiveTab("list")}
          >
            Lista de Juegos
          </button>
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
            onClick={() => {
              setActiveTab("form");
              cleanData();
            }}
          >
            Gestionar Juego
          </button>
        </div>

        {/* Renderización dinámica según la pestaña activa */}
        <div>
          {activeTab === "list" && (
            <div>
              <ListGames
                setId={setId}
                setActiveTab={setActiveTab}
                updateGame={updateGame}
                handleUpdate={handleUpdate}
                deleteGame={deleteGame}
                games={games}
                loading={loading}
              />
            </div>
          )}

          {activeTab === "form" && (
            <div>
              <RegisterGame
                id={id}
                setId={setId}
                name={name}
                setName={setName}
                categories={categories}
                setCategories={setCategories}
                minimumbet={minimumbet}
                setMinimumbet={setMinimumbet}
                maximumbet={maximumbet}
                setMaximumbet={setMaximumbet}
                errorGame={errorGame}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                games={games}
                setGames={setGames}
                cleanData={cleanData}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Games;
