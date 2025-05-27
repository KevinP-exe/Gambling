import { Schema, model } from "mongoose";

const gamesSchema = new Schema(
  {
    name: {
      type: String,
    },

    categories: {
      type: String,
    },

    minimumbet: {
      type: Number,
    },

    maximumbet: {
      type: Number,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("games", gamesSchema);