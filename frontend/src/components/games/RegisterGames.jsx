import React from "react";
import Button from "../Button";

const RegisterGame = ({
  id,
  name,
  setName,
  categories,
  setCategories,
  minimumbet,
  setMinimumbet,
  maximumbet,
  setMaximumbet,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
        <h1 className="text-2xl hidden">Id del juego {id}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="name"
            >
              Nombre del Juego
            </label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: Ruleta"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="categories"
            >
              Categorías
            </label>
            <input
              type="text"
              name="categories"
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: Casino, Azar"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="minimumbet"
            >
              Apuesta mínima
            </label>
            <input
              type="number"
              name="minimumbet"
              value={minimumbet}
              onChange={(e) => setMinimumbet(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: 10"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="maximumbet"
            >
              Apuesta máxima
            </label>
            <input
              type="number"
              name="maximumbet"
              value={maximumbet}
              onChange={(e) => setMaximumbet(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: 1000"
            />
          </div>
        </div>

        {id ? (
          <Button
            type="submit"
            label={"Editar Juego"}
            actionButton={(e) => {
              e.preventDefault();
              handleUpdate(e);
            }}
            colorClass={"warning"}
          />
        ) : (
          <Button
            type="submit"
            label={"Registrar Juego"}
            actionButton={(e) => {
              e.preventDefault();
              handleSubmit(e);
            }}
            colorClass={"primary"}
          />
        )}
      </form>
    </>
  );
};

export default RegisterGame;
