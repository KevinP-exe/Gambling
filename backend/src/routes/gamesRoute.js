import express from "express";
import gamesController from "../controllers/gamesController.js";

const router = express.Router();

router
  .route("/")
  .get(gamesController.getGames)
  .post(gamesController.createGame);

router
  .route("/:id")
  .put(gamesController.updateGame)
  .delete(gamesController.deleteGame);

export default router;
