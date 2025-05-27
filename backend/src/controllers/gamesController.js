const gamesController = {};
import gamesModel from "../models/gamesModel.js"; 

// OBTENER TODOS LOS JUEGOS
gamesController.getGames = async (req, res) => {
  try {
    const games = await gamesModel.find();
    res.json(games);
  } catch (error) {
    res.status(500).json({ message: "Error fetching games", error });
  }
};

// CREAR JUEGO
gamesController.createGame = async (req, res) => {
  try {
    const { name, categories, minimumbet, maximumbet } = req.body;
    const newGame = new gamesModel({ name, categories, minimumbet, maximumbet });
    await newGame.save();
    res.json({ message: "Game saved" });
  } catch (error) {
    res.status(500).json({ message: "Error saving game", error });
  }
};

// ELIMINAR JUEGO
gamesController.deleteGame = async (req, res) => {
  try {
    const deletedGame = await gamesModel.findByIdAndDelete(req.params.id);
    if (!deletedGame) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game deleted" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting game", error });
  }
};

// ACTUALIZAR JUEGO
gamesController.updateGame = async (req, res) => {
  try {
    const { name, categories, minimumbet, maximumbet } = req.body;
    const updatedGame = await gamesModel.findByIdAndUpdate(
      req.params.id,
      { name, categories, minimumbet, maximumbet },
      { new: true }
    );
    if (!updatedGame) {
      return res.status(404).json({ message: "Game not found" });
    }
    res.json({ message: "Game updated" });
  } catch (error) {
    res.status(500).json({ message: "Error updating game", error });
  }
};

export default gamesController;
