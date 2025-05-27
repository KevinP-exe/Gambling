import React from "react";
import Button from "../Button";

const RegisterClient = ({
  id,
  email,
  setEmail,
  password,
  setPassword,
  age,
  setAge,
  country,
  setCountry,
  handleSubmit,
  handleUpdate,
}) => {
  return (
    <>
      <form className="max-w-lg mx-auto p-4 bg-white shadow-md rounded mb-5">
        <h1 className="text-2xl hidden">Id del cliente {id}</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: cliente@dominio.com"
            />
          </div>
          <div className="mb-4 col-span-2">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="********"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Edad
            </label>
            <input
              type="number"
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: 30"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="country">
              País
            </label>
            <input
              type="text"
              name="country"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="Ej: México"
            />
          </div>
        </div>

        {id ? (
          <Button
            type="submit"
            label={"Editar Cliente"}
            actionButton={(e) => {
              e.preventDefault();
              handleUpdate(e);
            }}
            colorClass={"warning"}
          />
        ) : (
          <Button
            type="submit"
            label={"Registrar Cliente"}
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

export default RegisterClient;
