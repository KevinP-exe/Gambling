import express from "express";
import cors from "cors";
import gamesRoutes from "./src/routes/gamesRoute.js"
import clientsRoutes from "./src/routes/clientsRoute.js"

const app = express();

app.use(
    cors({
      origin:"https://gambling-tavs.vercel.app",
      credentials: true, 

    })
  );

app.use(express.json());

app.use("/api/clients", clientsRoutes);
app.use("/api/games", gamesRoutes);

export default app;