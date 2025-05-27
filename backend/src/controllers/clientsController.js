const clientsController = {};
import clientsModel from "../models/clientsModel.js";

clientsController.getclients = async (req, res) => {
  const clients = await clientsModel.find();
  res.json(clients);
};

// INSERT
clientsController.createclients = async (req, res) => {
  const { email, password, age, country } = req.body;
  const newclients = new clientsModel({ email, password, age, country });
  await newclients.save();
  res.json({ message: "client save" });
};

// DELETE
clientsController.deleteclients = async (req, res) => {
const deletedclients = await clientsModel.findByIdAndDelete(req.params.id);
  if (!deletedclients) {
    return res.status(404).json({ message: "client dont find" });
  }
  res.json({ message: "client deleted" });
};

// UPDATE
clientsController.updateclients = async (req, res) => {
  const { email, password, age, country  } = req.body;
  await clientsModel.findByIdAndUpdate(
    req.params.id,
    {
        email, password, age, country
    },
    { new: true }
  );
  res.json({ message: "client update" });
};

export default clientsController;
