import express from "express";
import cors from "cors";
import gamesRoutes from "./src/routes/gamesRoute.js"
import clientsRoutes from "./src/routes/clientsRoute.js"

const app = express();

app.use(
    cors({
      origin: [
            "https://gambling-tavs-5xdchuwoj-kevshitos-projects.vercel.app", // Frontend en Vercel
            "https://gambling-o5s5.onrender.com",   // Backend en OnRender
        ],
      credentials: true, 
      
    })
  );

app.use(express.json());

app.use("https://gambling-o5s5.onrender.com/api/clients", clientsRoutes);
app.use("https://gambling-o5s5.onrender.com/api/games", gamesRoutes);

export default app;