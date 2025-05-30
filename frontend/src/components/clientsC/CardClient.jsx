import React from "react";
import Button from "../Button";

const CardClient = ({ client, deleteClient, updateClient }) => {
  if (!client) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="px-6 py-4">
        <h2 className="text-xl font-bold text-gray-800 mb-2">{client.email}</h2>
        <p className="text-gray-600">
          <span className="font-semibold">Edad: </span> {client.age}
        </p>
        <p className="text-gray-600">
          <span className="font-semibold">País: </span> {client.country}
        </p>
        <p>id: {client._id}</p>

        <Button
          label={"Eliminar"}
          actionButton={() => deleteClient(client._id)}
          colorClass={"danger"}
        />

        <Button
          label={"Editar Información"}
          actionButton={() => updateClient(client)}
          colorClass={"warning"}
        />
      </div>
    </div>
  );
};

export default CardClient;
