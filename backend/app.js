import express from "express";
import cors from "cors";
import gamesRoutes from "./src/routes/gamesRoute.js"
import clientsRoutes from "./src/routes/clientsRoute.js"

const app = express();

app.use(
    cors({
      origin: [
            "https://gambling-tavs-5xdchuwoj-kevshitos-projects.vercel.app",
            "https://gambling-tavs.vercel.app", // Frontend en Vercel
            "https://gambling-o5s5.onrender.com",   // Backend en OnRender
        ],
      credentials: true, 

    })
  );

app.use(express.json());

app.use("/api/clients", clientsRoutes);
app.use("/api/games", gamesRoutes);

export default app;