import React, { useState, useEffect } from "react";
import RegisterClient from "../components/clientsC/RegisterClients";
import ListClients from "../components/clientsC/ListClients";
import useDataClients from "../components/clientsC/hooks/useDataClients";

const Customers = () => {
  // Cambiar el título de la página cuando se cargue
  useEffect(() => {
    document.title = 'Clientes';
  }, []);

  // Desestructurando hooks personalizados
  const {
    activeTab,
    setActiveTab,
    id,
    setId,
    email,
    setEmail,
    password,
    setPassword,
    age,
    setAge,
    country,
    setCountry,
    errorClient,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    clients,
    setClients,
    cleanData,
    handleSubmit,
    fetchData,
    deleteClient,
    updateClient,
    handleUpdate,
  } = useDataClients();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Clientes</h1>

        {/* Fila de botones para alternar entre vista de lista y formulario */}
        <div className="flex border-b border-gray-200 mb-4">
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
            onClick={() => setActiveTab("list")}
          >
            Lista de Clientes
          </button>
          <button
            className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:border-b-2 focus:border-blue-500"
            onClick={() => {
              setActiveTab("form");
              cleanData();
            }}
          >
            Gestionar Cliente
          </button>
        </div>

        {/* Renderización dinámica según la pestaña activa */}
        <div>
          {activeTab === "list" && (
            <div>
              <ListClients
                setId={setId}
                setActiveTab={setActiveTab}
                updateClient={updateClient}
                handleUpdate={handleUpdate}
                deleteClient={deleteClient}
                clients={clients}
                loading={loading}
              />
            </div>
          )}

          {activeTab === "form" && (
            <div>
              <RegisterClient
                id={id}
                setId={setId}
                email={email}
                setEmail={setEmail}
                password={password}
                setPassword={setPassword}
                age={age}
                setAge={setAge}
                country={country}
                setCountry={setCountry}
                errorClient={errorClient}
                setError={setError}
                success={success}
                setSuccess={setSuccess}
                loading={loading}
                setLoading={setLoading}
                clients={clients}
                setClients={setClients}
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

export default Customers;
