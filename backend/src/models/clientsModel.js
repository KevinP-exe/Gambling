import { Schema, model } from "mongoose";

const clientsSchema = new Schema(
  {
    email: {
      type: String,
    },

    password: {
      type: String,
    },

    age: {
      type: Number,
    },

    country: {
      type: String,
    },
  },
  {
    timestamps: true,
    strict: false,
  }
);

export default model("clients", clientsSchema);