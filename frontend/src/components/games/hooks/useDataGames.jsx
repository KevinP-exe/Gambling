import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataGames = () => {
  const ApiGames = "gambling-production.up.railway.app/api/games";

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [categories, setCategories] = useState("");
  const [minimumbet, setMinimumbet] = useState("");
  const [maximumbet, setMaximumbet] = useState("");
  const [errorGame, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [games, setGames] = useState([]);

  const cleanData = () => {
    setName("");
    setCategories("");
    setMinimumbet("");
    setMaximumbet("");
    setId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !categories || !minimumbet || !maximumbet) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newGame = {
        name,
        categories,
        minimumbet: Number(minimumbet),
        maximumbet: Number(maximumbet),
      };

      const response = await fetch(ApiGames, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newGame),
      });

      if (!response.ok) throw new Error("Error al registrar el juego");

      const data = await response.json();
      toast.success("Juego registrado");
      setSuccess("Juego registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      console.error("Error:", error);
      toast.error("Ocurrió un error al registrar el juego");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiGames);
      if (!response.ok) throw new Error("Error al obtener juegos");
      const data = await response.json();
      setGames(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteGame = async (id) => {
    try {
      const response = await fetch(`${ApiGames}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el juego");

      toast.success("Juego eliminado");
      setGames((prev) => prev.filter((game) => game._id !== id));
      fetchData();
    } catch (error) {
      console.error("Error deleting game:", error);
      toast.error("Error al eliminar el juego");
    }
  };

  const updateGame = (gameData) => {
    setId(gameData._id);
    setName(gameData.name);
    setCategories(gameData.categories);
    setMinimumbet(gameData.minimumbet);
    setMaximumbet(gameData.maximumbet);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedGame = {
        name,
        categories,
        minimumbet: Number(minimumbet),
        maximumbet: Number(maximumbet),
      };

      const response = await fetch(`${ApiGames}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedGame),
      });

      if (!response.ok) throw new Error("Error al actualizar el juego");

      toast.success("Juego actualizado");
      setSuccess("Juego actualizado correctamente");
      cleanData();
      setActiveTab("list");
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Error al actualizar el juego");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return {
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
    handleUpdate,
  };
};

export default useDataGames;
