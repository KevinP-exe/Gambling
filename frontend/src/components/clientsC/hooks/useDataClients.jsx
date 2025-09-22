import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";

const useDataClients = () => {
  const ApiClients = "gambling-production.up.railway.app"; 

  const [activeTab, setActiveTab] = useState("list");
  const [id, setId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [country, setCountry] = useState("");
  const [errorClient, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [loading, setLoading] = useState(false);
  const [clients, setClients] = useState([]);

  const cleanData = () => {
    setEmail("");
    setPassword("");
    setAge("");
    setCountry("");
    setId("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || !age || !country) {
      setError("Todos los campos son obligatorios");
      toast.error("Todos los campos son obligatorios");
      return;
    }

    try {
      const newClient = {
        email,
        password,
        age: Number(age),
        country,
      };

      const response = await fetch(ApiClients, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newClient),
      });

      if (!response.ok) throw new Error("Error al registrar el cliente");

      const data = await response.json();
      toast.success("Cliente registrado");
      setSuccess("Cliente registrado correctamente");
      cleanData();
      fetchData();
    } catch (error) {
      setError(error.message);
      toast.error("Ocurrió un error al registrar el cliente");
    } finally {
      setLoading(false);
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(ApiClients);
      if (!response.ok) throw new Error("Error al obtener los clientes");
      const data = await response.json();
      setClients(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteClient = async (id) => {
    try {
      const response = await fetch(`${ApiClients}/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Error al eliminar el cliente");

      toast.success("Cliente eliminado");
      setClients((prev) => prev.filter((client) => client._id !== id));
      fetchData();
    } catch (error) {
      toast.error("Error al eliminar el cliente");
      console.error("Error deleting client:", error);
    }
  };

  const updateClient = (clientData) => {
    setId(clientData._id);
    setEmail(clientData.email);
    setPassword(clientData.password);
    setAge(clientData.age);
    setCountry(clientData.country);
    setError(null);
    setSuccess(null);
    setActiveTab("form");
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const updatedClient = {
        email,
        password,
        age: Number(age),
        country,
      };

      const response = await fetch(`${ApiClients}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedClient),
      });

      if (!response.ok) throw new Error("Error al actualizar el cliente");

      toast.success("Cliente actualizado");
      setSuccess("Cliente actualizado correctamente");
      cleanData();
      setActiveTab("list");
      fetchData();
    } catch (error) {
      toast.error("Error al actualizar el cliente");
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
  };
};

export default useDataClients;
